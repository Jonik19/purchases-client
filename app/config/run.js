/**
 * Run
 */

export default function run(AuthenticationService, $state, $rootScope, config) {
  $rootScope.config = config;

  AuthenticationService.check()
    .then(function (user) {
      // TODO: redirect to admin page
      $state.go('admin.rooms.list');
    });
};

run.$inject = ['AuthenticationService', '$state', '$rootScope', 'config'];