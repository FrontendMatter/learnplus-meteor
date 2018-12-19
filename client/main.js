// Routes
import './routes'

// Vendors
import 'popper.js'
import 'bootstrap'
import 'material-design-kit'
import domFactory from 'dom-factory'

// Theme
import '../public/css/app.css'
import '../public/css/material-icons.css'

// Main
import './main.html'
import '../imports/ui/navbar'
import '../imports/ui/layout-fluid'
import '../imports/ui/sidebar'

// Pages
import '../imports/pages/dashboard.html'

// Startup
import { Meteor } from 'meteor/meteor'

Meteor.startup(() => {

  // Self Initialize DOM Factory Components
  domFactory.handler.autoInit()

})
