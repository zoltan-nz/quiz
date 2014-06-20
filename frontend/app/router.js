var Router = Ember.Router.extend({
  location: ENV.locationType
});

Router.map(function() {
  this.resources('login');
});

export default Router;
