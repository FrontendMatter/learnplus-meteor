import './sidebar.html'
import { Template } from 'meteor/templating'

Template.registerHelper("activeClass", function (slug) {
  var controller = Iron.controller()
  return slug === controller.route.getName() ? ' active' : ''
})
