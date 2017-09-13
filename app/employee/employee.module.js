/**
 * Created by vipulkumarsharma on 13/09/17.
 */
import angular from 'angular';
import routing from './employee.route';
import component from './employee.component';
import service from './employee.service';

/* @ngInject */
angular
    .module('employee', [])
    .component('employee', component)
    .factory('employeeService', service)
    .config(routing);
