Meteor.startup(function() {
  Router.route('/admin/users', {
    name: 'accountsAdmin',
    template: 'accountsAdmin'
  });
});
