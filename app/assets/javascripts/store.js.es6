var Store = DS.Store.extend({})

//# Override the default adapter with the `DS.ActiveModelAdapter` which
//# is built to work nicely with the ActiveModel::Serializers gem.
var ApplicationAdapter = DS.ActiveModelAdapter.extend({});

export default Store;
export default ApplicationAdapter;
