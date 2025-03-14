<template>
<!-- eslint-disable -->
	<div class="window-container" :class="{ 'window-mobile': isDevice }">
		<form v-if="addNewRoom" @submit.prevent="createRoom">
			<input v-model="addRoomUsername" type="text" placeholder="Add username" />
			<button type="submit" :disabled="disableForm || !addRoomUsername">
				Create Room
			</button>
			<button class="button-cancel" @click="addNewRoom = false">
				Cancel
			</button>
		</form>

		<form v-if="inviteRoomId" @submit.prevent="addRoomUser">
			<input v-model="invitedUsername" type="text" placeholder="Add username" />
			<button type="submit" :disabled="disableForm || !invitedUsername">
				Add User
			</button>
			<button class="button-cancel" @click="inviteRoomId = null">
				Cancel
			</button>
		</form>

		<form v-if="removeRoomId" @submit.prevent="deleteRoomUser">
			<select v-model="removeUserId">
				<option default value="">
					Select User
				</option>
				<option v-for="user in removeUsers" :key="user._id" :value="user._id">
					{{ user.username }}
				</option>
			</select>
			<button type="submit" :disabled="disableForm || !removeUserId">
				Remove User
			</button>
			<button class="button-cancel" @click="removeRoomId = null">
				Cancel
			</button>
		</form>

		<chat-window
			:height="screenHeight"
			:theme="theme"
			:styles="styles"
			:current-user-id="currentUserId"
			:room-id="roomId"
			:rooms="loadedRooms"
			:loading-rooms="loadingRooms"
			:messages="messages"
			:messages-loaded="messagesLoaded"
			:rooms-loaded="roomsLoaded"
			:room-actions="roomActions"
			:menu-actions="menuActions"
			:room-message="roomMessage"
			@fetch-more-rooms="fetchMoreRooms"
			@fetch-messages="fetchMessages"
			@send-message="sendMessage"
			@edit-message="editMessage"
			@delete-message="deleteMessage"
			@open-file="openFile"
			@open-user-tag="openUserTag"
			@add-room="addRoom"
			@room-action-handler="menuActionHandler"
			@menu-action-handler="menuActionHandler"
			@send-message-reaction="sendMessageReaction"
			@typing-message="typingMessage"
			@toggle-rooms-list="$emit('show-demo-options', $event.opened)"
		>
			<!-- <template #room-header="{ room }">
				{{ room.roomName }}
			</template> -->
		</chat-window>
	</div>
</template>

<script>
/* eslint-disable */
import {
	firebase,
	roomsRef,
	messagesRef,
	usersRef,
	filesRef,
	deleteDbField
} from '@/firestore'
import { parseTimestamp, isSameDay } from '@/utils/dates'
import ChatWindow from 'vue-advanced-chat'
import 'vue-advanced-chat/dist/vue-advanced-chat.css'
// import ChatWindow, { Rooms } from 'vue-advanced-chat'
// import ChatWindow from 'vue-advanced-chat'
// import 'vue-advanced-chat/dist/vue-advanced-chat.css'
// import ChatWindow from './../../dist/vue-advanced-chat.umd.min.js'

export default {
	components: {
		ChatWindow
	},

	props: {
		currentUserId: { type: String, required: true },
		theme: { type: String, required: true },
		isDevice: { type: Boolean, required: true }
	},

	emits: ['show-demo-options'],

	data() {
		return {
			roomsPerPage: 15,
			rooms: [],
			roomId: '',
			startRooms: null,
			endRooms: null,
			roomsLoaded: false,
			loadingRooms: true,
			allUsers: [],
			loadingLastMessageByRoom: 0,
			roomsLoadedCount: false,
			selectedRoom: null,
			messagesPerPage: 20,
			messages: [],
			messagesLoaded: false,
			roomMessage: '',
			startMessages: null,
			endMessages: null,
			roomsListeners: [],
			listeners: [],
			typingMessageCache: '',
			disableForm: false,
			addNewRoom: null,
			addRoomUsername: '',
			inviteRoomId: null,
			invitedUsername: '',
			removeRoomId: null,
			removeUserId: '',
			removeUsers: [],
			roomActions: [
				{ name: 'inviteUser', title: 'Invite User' },
				{ name: 'removeUser', title: 'Remove User' },
				{ name: 'deleteRoom', title: 'Delete Room' }
			],
			menuActions: [
				{ name: 'inviteUser', title: 'Invite User' },
				{ name: 'removeUser', title: 'Remove User' },
				{ name: 'deleteRoom', title: 'Delete Room' }
			],
			styles: { container: { borderRadius: '4px' } }
			// ,dbRequestCount: 0
		}
	},

	computed: {
		loadedRooms() {
			return this.rooms.slice(0, this.roomsLoadedCount)
		},
		screenHeight() {
			return window.innerHeight + 'px'
		}
	},

	mounted() {
		this.fetchRooms()
		this.updateUserOnlineStatus()
	},

	methods: {
		resetRooms() {
			this.loadingRooms = true
			this.loadingLastMessageByRoom = 0
			this.roomsLoadedCount = 0
			this.rooms = []
			this.roomsLoaded = true
			this.startRooms = null
			this.endRooms = null
			this.roomsListeners.forEach(listener => listener())
			this.roomsListeners = []
			this.resetMessages()
		},

		resetMessages() {
			this.messages = []
			this.messagesLoaded = false
			this.startMessages = null
			this.endMessages = null
			this.listeners.forEach(listener => listener())
			this.listeners = []
		},

		fetchRooms() {
			this.resetRooms()
			this.fetchMoreRooms()
		},

		async fetchMoreRooms() {
			if (this.endRooms && !this.startRooms) return (this.roomsLoaded = true)

			let query = roomsRef
				.where('users', 'array-contains', this.currentUserId)
				.orderBy('lastUpdated', 'desc')
				.limit(this.roomsPerPage)

			if (this.startRooms) query = query.startAfter(this.startRooms)

			const rooms = await query.get()
			// this.incrementDbCounter('Fetch Rooms', rooms.size)

			this.roomsLoaded = rooms.empty || rooms.size < this.roomsPerPage

			if (this.startRooms) this.endRooms = this.startRooms
			this.startRooms = rooms.docs[rooms.docs.length - 1]

			const roomUserIds = []
			rooms.forEach(room => {
				room.data().users.forEach(userId => {
					const foundUser = this.allUsers.find(user => user && user._id === userId)
					if (!foundUser && roomUserIds.indexOf(userId) === -1) {
						roomUserIds.push(userId)
					}
				})
			})

			// this.incrementDbCounter('Fetch Room Users', roomUserIds.length)
			const rawUsers = []
			roomUserIds.forEach(userId => {
				const promise = usersRef
					.doc(userId)
					.get()
					.then(user => user.data())

				rawUsers.push(promise)
			})

			this.allUsers = [...this.allUsers, ...(await Promise.all(rawUsers))]

			const roomList = {}
			rooms.forEach(room => {
				roomList[room.id] = { ...room.data(), users: [] }

				room.data().users.forEach(userId => {
					const foundUser = this.allUsers.find(user => user && user._id === userId)
					if (foundUser) roomList[room.id].users.push(foundUser)
				})
			})

			const formattedRooms = []

			Object.keys(roomList).forEach(key => {
				const room = roomList[key]

				const roomContacts = room.users.filter(
					user => user._id !== this.currentUserId
				)

				room.roomName =
					roomContacts.map(user => user.username).join(', ') || 'Myself'

				const roomAvatar =
					roomContacts.length === 1 && roomContacts[0].avatar
						? roomContacts[0].avatar
						: require('@/assets/logo.png')

				formattedRooms.push({
					...room,
					roomId: key,
					avatar: roomAvatar,
					index: room.lastUpdated.seconds,
					lastMessage: {
						content: 'Room created',
						timestamp: this.formatTimestamp(
							new Date(room.lastUpdated.seconds),
							room.lastUpdated
						)
					}
				})
			})

			this.rooms = this.rooms.concat(formattedRooms)
			formattedRooms.map(room => this.listenLastMessage(room))

			if (!this.rooms.length) {
				this.loadingRooms = false
				this.roomsLoadedCount = 0
			}

			this.listenUsersOnlineStatus(formattedRooms)
			this.listenRooms(query)
			// setTimeout(() => console.log('TOTAL', this.dbRequestCount), 2000)
		},

		listenLastMessage(room) {
			const listener = messagesRef(room.roomId)
				.orderBy('timestamp', 'desc')
				.limit(1)
				.onSnapshot(messages => {
					// this.incrementDbCounter('Listen Last Room Message', messages.size)
					messages.forEach(message => {
						const lastMessage = this.formatLastMessage(message.data())
						const roomIndex = this.rooms.findIndex(
							r => room.roomId === r.roomId
						)
						this.rooms[roomIndex].lastMessage = lastMessage
						this.rooms = [...this.rooms]
					})
					if (this.loadingLastMessageByRoom < this.rooms.length) {
						this.loadingLastMessageByRoom++

						if (this.loadingLastMessageByRoom === this.rooms.length) {
							this.loadingRooms = false
							this.roomsLoadedCount = this.rooms.length
						}
					}
				})

			this.roomsListeners.push(listener)
		},

		formatLastMessage(message) {
			if (!message.timestamp) return

			let content = message.content
			if (message.files && message.files.length) {
				const file = message.files[0]
				content = `${file.name}.${file.extension || file.type}`
			}

			return {
				...message,
				...{
					content,
					timestamp: this.formatTimestamp(
						new Date(message.timestamp.seconds * 1000),
						message.timestamp
					),
					distributed: true,
					seen: message.sender_id === this.currentUserId ? message.seen : null,
					new:
						message.sender_id !== this.currentUserId &&
						(!message.seen || !message.seen[this.currentUserId])
				}
			}
		},

		formatTimestamp(date, timestamp) {
			const timestampFormat = isSameDay(date, new Date()) ? 'HH:mm' : 'DD/MM/YY'
			const result = parseTimestamp(timestamp, timestampFormat)
			return timestampFormat === 'HH:mm' ? `Today, ${result}` : result
		},

		fetchMessages({ room, options = {} }) {
			this.$emit('show-demo-options', false)

			if (options.reset) {
				this.resetMessages()
				this.roomId = room.roomId
			}

			if (this.endMessages && !this.startMessages) {
				return (this.messagesLoaded = true)
			}

			let ref = messagesRef(room.roomId)

			let query = ref.orderBy('timestamp', 'desc').limit(this.messagesPerPage)

			if (this.startMessages) query = query.startAfter(this.startMessages)

			this.selectedRoom = room.roomId

			query.get().then(messages => {
				// this.incrementDbCounter('Fetch Room Messages', messages.size)
				if (this.selectedRoom !== room.roomId) return

				if (messages.empty) this.messagesLoaded = true

				if (this.startMessages) this.endMessages = this.startMessages
				this.startMessages = messages.docs[messages.docs.length - 1]

				let listenerQuery = ref.orderBy('timestamp')

				if (this.startMessages) {
					listenerQuery = listenerQuery.startAfter(this.startMessages)
				}
				if (this.endMessages) {
					listenerQuery = listenerQuery.endAt(this.endMessages)
				}

				if (options.reset) this.messages = []

				messages.forEach(message => {
					const formattedMessage = this.formatMessage(room, message)
					this.messages.unshift(formattedMessage)
				})

				const listener = listenerQuery.onSnapshot(snapshots => {
					// this.incrementDbCounter('Listen Room Messages', snapshots.size)
					this.listenMessages(snapshots, room)
				})
				this.listeners.push(listener)
			})
		},

		listenMessages(messages, room) {
			messages.forEach(message => {
				const formattedMessage = this.formatMessage(room, message)
				const messageIndex = this.messages.findIndex(m => m._id === message.id)

				if (messageIndex === -1) {
					this.messages = this.messages.concat([formattedMessage])
				} else {
					this.messages[messageIndex] = formattedMessage
					this.messages = [...this.messages]
				}

				this.markMessagesSeen(room, message)
			})
		},

		markMessagesSeen(room, message) {
			if (
				message.data().sender_id !== this.currentUserId &&
				(!message.data().seen || !message.data().seen[this.currentUserId])
			) {
				messagesRef(room.roomId)
					.doc(message.id)
					.update({
						[`seen.${this.currentUserId}`]: new Date()
					})
			}
		},

		formatMessage(room, message) {
			const senderUser = room.users.find(
				user => message.data().sender_id === user._id
			)

			const { timestamp } = message.data()

			const formattedMessage = {
				...message.data(),
				...{
					senderId: message.data().sender_id,
					_id: message.id,
					seconds: timestamp.seconds,
					timestamp: parseTimestamp(timestamp, 'HH:mm'),
					date: parseTimestamp(timestamp, 'DD MMMM YYYY'),
					username: senderUser ? senderUser.username : null,
					// avatar: senderUser ? senderUser.avatar : null,
					distributed: true
				}
			}

			if (message.data().replyMessage) {
				formattedMessage.replyMessage = {
					...message.data().replyMessage,
					...{
						senderId: message.data().replyMessage.sender_id
					}
				}
			}

			return formattedMessage
		},

		async sendMessage({ content, roomId, files, replyMessage }) {
			const message = {
				sender_id: this.currentUserId,
				content,
				timestamp: new Date()
			}

			if (files) {
				message.files = this.formattedFiles(files)
			}

			if (replyMessage) {
				message.replyMessage = {
					_id: replyMessage._id,
					content: replyMessage.content,
					sender_id: replyMessage.senderId
				}

				if (replyMessage.files) {
					message.replyMessage.files = replyMessage.files
				}
			}

			const { id } = await messagesRef(roomId).add(message)

			if (files) {
				for (let index = 0; index < files.length; index++) {
					await this.uploadFile({ file: files[index], messageId: id, roomId })
				}
			}

			roomsRef.doc(roomId).update({ lastUpdated: new Date() })
		},

		async editMessage({ messageId, newContent, roomId, files }) {
			const newMessage = { edited: new Date() }
			newMessage.content = newContent

			if (files) {
				newMessage.files = this.formattedFiles(files)
			} else {
				newMessage.files = deleteDbField
			}

			await messagesRef(roomId)
				.doc(messageId)
				.update(newMessage)

			if (files) {
				for (let index = 0; index < files.length; index++) {
					if (files[index].blob) {
						await this.uploadFile({ file: files[index], messageId, roomId })
					}
				}
			}
		},

		async deleteMessage({ message, roomId }) {
			await messagesRef(roomId)
				.doc(message._id)
				.update({ deleted: new Date() })

			const { files } = message

			if (files) {
				files.forEach(file => {
					const deleteFileRef = filesRef
						.child(this.currentUserId)
						.child(message._id)
						.child(`${file.name}.${file.extension || file.type}`)

					deleteFileRef.delete()
				})
			}
		},

		async uploadFile({ file, messageId, roomId }) {
			let type = file.extension || file.type
			if (type === 'svg' || type === 'pdf') {
				type = file.type
			}

			const uploadFileRef = filesRef
				.child(this.currentUserId)
				.child(messageId)
				.child(`${file.name}.${type}`)

			await uploadFileRef.put(file.blob, { contentType: type })
			const url = await uploadFileRef.getDownloadURL()

			const messageDoc = await messagesRef(roomId)
				.doc(messageId)
				.get()

			const files = messageDoc.data().files

			files.forEach(f => {
				if (f.url === file.localUrl) {
					f.url = url
				}
			})

			await messagesRef(roomId)
				.doc(messageId)
				.update({ files })
		},

		formattedFiles(files) {
			const formattedFiles = []

			files.forEach(file => {
				const messageFile = {
					name: file.name,
					size: file.size,
					type: file.type,
					extension: file.extension || file.type,
					url: file.url || file.localUrl
				}

				if (file.audio) {
					messageFile.audio = true
					messageFile.duration = file.duration
				}

				formattedFiles.push(messageFile)
			})

			return formattedFiles
		},

		openFile({ file }) {
			window.open(file.file.url, '_blank')
		},

		async openUserTag({ user }) {
			let roomId

			this.rooms.forEach(room => {
				if (room.users.length === 2) {
					const userId1 = room.users[0]._id
					const userId2 = room.users[1]._id
					if (
						(userId1 === user._id || userId1 === this.currentUserId) &&
						(userId2 === user._id || userId2 === this.currentUserId)
					) {
						roomId = room.roomId
					}
				}
			})

			if (roomId) return (this.roomId = roomId)

			const query1 = await roomsRef
				.where('users', '==', [this.currentUserId, user._id])
				.get()

			if (!query1.empty) {
				return this.loadRoom(query1)
			}

			let query2 = await roomsRef
				.where('users', '==', [user._id, this.currentUserId])
				.get()

			if (!query2.empty) {
				return this.loadRoom(query2)
			}

			const room = await roomsRef.add({
				users: [user._id, this.currentUserId],
				lastUpdated: new Date()
			})

			this.roomId = room.id
			this.fetchRooms()
		},

		async loadRoom(query) {
			query.forEach(async room => {
				if (this.loadingRooms) return
				await roomsRef.doc(room.id).update({ lastUpdated: new Date() })
				this.roomId = room.id
				this.fetchRooms()
			})
		},

		menuActionHandler({ action, roomId }) {
			switch (action.name) {
				case 'inviteUser':
					return this.inviteUser(roomId)
				case 'removeUser':
					return this.removeUser(roomId)
				case 'deleteRoom':
					return this.deleteRoom(roomId)
			}
		},

		async sendMessageReaction({ reaction, remove, messageId, roomId }) {
			const dbAction = remove
				? firebase.firestore.FieldValue.arrayRemove(this.currentUserId)
				: firebase.firestore.FieldValue.arrayUnion(this.currentUserId)

			await messagesRef(roomId)
				.doc(messageId)
				.update({
					[`reactions.${reaction.unicode}`]: dbAction
				})
		},

		typingMessage({ message, roomId }) {
			if (!roomId) return

			if (message.length > 1) {
				return (this.typingMessageCache = message)
			}

			if (message.length === 1 && this.typingMessageCache) {
				return (this.typingMessageCache = message)
			}

			this.typingMessageCache = message

			const dbAction = message
				? firebase.firestore.FieldValue.arrayUnion(this.currentUserId)
				: firebase.firestore.FieldValue.arrayRemove(this.currentUserId)

			roomsRef.doc(roomId).update({
				typingUsers: dbAction
			})
		},

		async listenRooms(query) {
			const listener = query.onSnapshot(rooms => {
				// this.incrementDbCounter('Listen Rooms Typing Users', rooms.size)
				rooms.forEach(room => {
					const foundRoom = this.rooms.find(r => r.roomId === room.id)
					if (foundRoom) {
						foundRoom.typingUsers = room.data().typingUsers
						foundRoom.index = room.data().lastUpdated.seconds
					}
				})
			})
			this.roomsListeners.push(listener)
		},

		updateUserOnlineStatus() {
			const userStatusRef = firebase
				.database()
				.ref('/status/' + this.currentUserId)

			const isOfflineData = {
				state: 'offline',
				lastChanged: firebase.database.ServerValue.TIMESTAMP
			}

			const isOnlineData = {
				state: 'online',
				lastChanged: firebase.database.ServerValue.TIMESTAMP
			}

			firebase
				.database()
				.ref('.info/connected')
				.on('value', snapshot => {
					if (snapshot.val() === false) return

					userStatusRef
						.onDisconnect()
						.set(isOfflineData)
						.then(() => {
							userStatusRef.set(isOnlineData)
						})
				})
		},

		listenUsersOnlineStatus(rooms) {
			rooms.map(room => {
				room.users.map(user => {
					const listener = firebase
						.database()
						.ref('/status/' + user._id)
						.on('value', snapshot => {
							if (!snapshot || !snapshot.val()) return

							const lastChanged = this.formatTimestamp(
								new Date(snapshot.val().lastChanged),
								new Date(snapshot.val().lastChanged)
							)

							user.status = { ...snapshot.val(), lastChanged }

							const roomIndex = this.rooms.findIndex(
								r => room.roomId === r.roomId
							)

							this.rooms[roomIndex] = room
							this.rooms = [...this.rooms]
						})
					this.roomsListeners.push(listener)
				})
			})
		},

		addRoom() {
			this.resetForms()
			this.addNewRoom = true
		},

		async createRoom() {
			this.disableForm = true

			const { id } = await usersRef.add({ username: this.addRoomUsername })
			await usersRef.doc(id).update({ _id: id })
			await roomsRef.add({
				users: [id, this.currentUserId],
				lastUpdated: new Date()
			})

			this.addNewRoom = false
			this.addRoomUsername = ''
			this.fetchRooms()
		},

		inviteUser(roomId) {
			this.resetForms()
			this.inviteRoomId = roomId
		},

		async addRoomUser() {
			this.disableForm = true

			const { id } = await usersRef.add({ username: this.invitedUsername })
			await usersRef.doc(id).update({ _id: id })

			await roomsRef
				.doc(this.inviteRoomId)
				.update({ users: firebase.firestore.FieldValue.arrayUnion(id) })

			this.inviteRoomId = null
			this.invitedUsername = ''
			this.fetchRooms()
		},

		removeUser(roomId) {
			this.resetForms()
			this.removeRoomId = roomId
			this.removeUsers = this.rooms.find(room => room.roomId === roomId).users
		},

		async deleteRoomUser() {
			this.disableForm = true

			await roomsRef.doc(this.removeRoomId).update({
				users: firebase.firestore.FieldValue.arrayRemove(this.removeUserId)
			})

			this.removeRoomId = null
			this.removeUserId = ''
			this.fetchRooms()
		},

		async deleteRoom(roomId) {
			const room = this.rooms.find(r => r.roomId === roomId)
			if (
				room.users.find(user => user._id === 'SGmFnBZB4xxMv9V4CVlW') ||
				room.users.find(user => user._id === '6jMsIXUrBHBj7o2cRlau')
			) {
				return alert('Nope, for demo purposes you cannot delete this room')
			}

			const ref = messagesRef(roomId)

			ref.get().then(res => {
				if (res.empty) return
				res.docs.map(doc => ref.doc(doc.id).delete())
			})

			await roomsRef.doc(roomId).delete()

			this.fetchRooms()
		},

		resetForms() {
			this.disableForm = false
			this.addNewRoom = null
			this.addRoomUsername = ''
			this.inviteRoomId = null
			this.invitedUsername = ''
			this.removeRoomId = null
			this.removeUserId = ''
		}

		// ,incrementDbCounter(type, size) {
		// 	size = size || 1
		// 	this.dbRequestCount += size
		// 	console.log(type, size)
		// }
	}
}
</script>