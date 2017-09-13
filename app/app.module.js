import angular from 'angular';
import uirouter from 'angular-ui-router';
import typeahead from './typeahead/typeahead.module';
import modal from './modal/modal.module';
import employeeRoutes from './employee/employee.module';

require('./main.scss');
angular.module('app', [
  uirouter,
  'employee',
  'typeahead',
  'modal'
]);
