import { Meteor } from 'meteor/meteor'

Meteor.startup(() => {
  WebApp.addHtmlAttributeHook(function() {
    return {
      lang: 'en',
      dir: 'ltr'
    }
  })
})
