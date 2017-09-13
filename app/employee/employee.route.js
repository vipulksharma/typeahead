function employeeRoutes($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.when('', '/employee');
  $urlRouterProvider.when('/', '/employee');
  $stateProvider
    .state('employee', {
      url: '/employee',
      component: 'employee'
    })
}
/* @ngInject */
export default employeeRoutes;
