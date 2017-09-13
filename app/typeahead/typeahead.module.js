/**
 * Created by vipulkumarsharma on 13/09/17.
 */
import angular from 'angular';
import component from './typeahead.component';
import service from './typeahead.service';

/* @ngInject */
angular
    .module('typeahead', [])
    .component('typeahead', component)
    .factory('typeaheadService', service);
