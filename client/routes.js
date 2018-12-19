LayoutFluidController = RouteController.extend({
  layoutTemplate: 'LayoutFluid',
  yieldRegions: {
    'Navbar': { to: 'navbar' },
    'Sidebar': { to: 'sidebar' }
  },
  action() {
    this.render()
  },
  data() {
    return {
      containerClass: 'container-fluid'
    }
  }
})

Router.configure({
  controller: 'LayoutFluidController'
})

Router.route('/', {
  template: 'Dashboard',
  name: 'student-dashboard'
})

Router.route('/instructor/dashboard', {
  template: 'Dashboard',
  name: 'instructor-dashboard'
})
