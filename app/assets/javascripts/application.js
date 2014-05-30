// require jquery
// require handlebars
// require ember
// require ember-data
// require_self
// require competition_app

window.CompetitionApp = Ember.Application.create({
  LOG_TRANSITIONS_INTERNAL: true,
  LOG_ACTIVE_GENERATION: true,
  LOG_VIEW_LOOKUPS: true,
  LOG_BINDINGS: true
});

Ember.run.backburner.DEBUG = true;
Ember.ENV.RAISE_ON_DEPRECATION = true;
Ember.LOG_STACKTRACE_ON_DEPRECATION = true;