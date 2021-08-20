import moment from 'moment'

export const servers = [{
  name: 'www01',
  status: 'success',
  icon: 'globe',
  description: 'Web server that runs our sites'
}, {
  name: 'sql01',
  status: 'danger',
  icon: 'database',
  description: 'mySQL server used for reporting'
}, {
  name: 'mongoDB01',
  status: 'info',
  icon: 'file-code-o',
  description: 'Main DB server'
}, {
  name: 'ldap01',
  status: 'success',
  icon: 'key',
  description: 'Authentication server'
}, {
  name: 'mgmt01',
  status: 'success',
  icon: 'home',
  description: 'Management server with all tools'
}, {
  name: 'bkup01',
  status: 'warning',
  icon: 'backward',
  description: 'Backup server'
}]

export const stats = [{
  header: '8390',
  text: 'Visitors'
}, {
  header: '30%',
  text: 'Referrals'
}, {
  header: '70%',
  text: 'Organic'
}]

export const timeline = [{
  icon: 'fa-envelope',
  color: 'blue',
  title: 'Order ID 1565 created successfully.',
  time: moment().endOf('day').fromNow()
  // body: '',
  // buttons: [{
  //   type: 'primary',
  //   message: 'Read more',
  //   href: 'https://github.com/misterGF/CoPilot',
  //   target: '_blank'
  // }]
},
{
  icon: 'fa-user',
  color: 'yellow',
  title: 'Expert Assignment Pending',
  body: '',
  buttons: [{
    type: 'primary',
    message: 'Click here to assign/change expert',
    href: 'https://github.com/misterGF/CoPilot',
    target: '_blank'
  }],
  time: moment('20150620', 'MMM Do YY').fromNow()
},
{
  icon: 'fa-user',
  color: 'yellow',
  title: 'Expert John doe assigned successfully',
  body: '',
  time: moment('20150620', 'MMM Do YY').fromNow()
},
{
  icon: 'fa-camera',
  color: 'purple',
  title: 'Expert submission successful',
  time: moment('20130620', 'YYYYMMDD').fromNow(),
  body: '<div class="embed-responsive embed-responsive-16by9"><iframe src="https://docs.google.com/document/d/e/2PACX-1vRl-pQPTVh_k9NOGmcQvJ3eAQPzEyW7blHot66nB3zFyHZ8q4cN5U7pInZF2_wfgvnGQHtm8kANQgNo/pub?embedded=true"></iframe></div>'
}]
