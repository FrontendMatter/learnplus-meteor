import './navbar.html'
import { Template } from 'meteor/templating'

Template.NavbarNotifications.helpers({
  messages: [{
    avatar: '/images/people/110/woman-5.jpg',
    name: 'Michelle',
    date: '5 minutes ago',
    message: 'Clients loved the new design.',
    unread: true
  }, 
  {
    avatar: '/images/people/110/woman-5.jpg',
    name: 'Michelle',
    date: '5 minutes ago',
    message: '🔥 Superb job..',
    unread: true
  }],
  notifications: [{
    created_at: '3 minutes ago',
    icon_class: 'text-danger',
    icon: 'account_circle',
    message: 'Your profile information has not been synced correctly.',
    important: true
  }, {
    created_at: '5 hours ago',
    icon_class: 'text-success',
    icon: 'group_add',
    name: 'Adrian. D',
    message: 'Wants to join your private group.'
  }, {
    created_at: '1 day ago',
    icon_class: 'text-warning',
    icon: 'storage',
    message: 'Your deploy was successful.'
  }]
})
