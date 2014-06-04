var Router = Ember.Router.extend({})

Router.map(function() {
  this.resource('posts');
});

export default Router;