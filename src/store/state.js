export default {
  callingAPI: false,
  searching: '',
  serverURI: 'http://10.110.1.136:8080',
  user: null,
  token: null,
  userInfo: {
    messages: [
      {
        id: 1,
        title: 'Nagato0922(Expert)',
        body: 'Payment not credited for order ID 2?',
        createdAt: '17 min ago'
      }
    ],
    notifications: [
      {
        id: 1,
        title: 'New lead created!',
        body: 'An order with ID 1365 is created.',
        createdAt: 'just now',
        readAt: null
      },
      {
        id: 2,
        title: 'New Comment on Order 1252',
        body: 'Hi, what is the status on this ?',
        createdAt: '4 hours ago',
        readAt: null
      },
      {
        id: 3,
        title: 'Order ID 1196 reopened',
        body: 'User JaneDoe has reopened his order.',
        createdAt: '27 days ago',
        readAt: '2018-08-12 00:00:00'
      }
    ],
    tasks: []
  }
}
