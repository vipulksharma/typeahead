import employeeHtml from './employee.html';

/* @ngInject */
let employeeComponent = {
  template: employeeHtml,
  controllerAs: 'employee',
  controller: function($scope, employeeService, $timeout) {
    const that = this;
    that.companyData = employeeService.employeeData();
    that.employeeData = {};
    that.modalShown = true;
    that.team = 'team';
    that.teamPlaceHolder = 'Select Team...';
    that.employeePlaceHolder = 'Select Employee...';
    that.selectTeam = function(searches) {
      that.selectedTeam = searches.team;
      that.employeeList = searches.employees;
      $timeout(function() {
        that.selectedEmployee = '';
      },0)
    }

    that.hideModal = function() {
      if(that.selectedTeam || that.selectedEmployee) {
        if(confirm('Are you sure you want to abort!')) {
          that.modalShown = false;
          $timeout(function() {
            that.selectedTeam = '';
            that.selectedEmployee = '';
            that.employeeList = '';
          }, 0);
        }
      } else { that.modalShown = false;}
    }

    that.selectEmployee = function(searches) {
      that.selectedEmployee = searches;
    }

    that.validateDialogBox = function(){
      that.teamError = '';
      that.employeeError = '';
      if(!that.selectedTeam) {
        that.teamError = 'Please select a team';
      }
      if(!that.selectedEmployee) {
        that.employeeError = 'Please select an employee';
        return false;
      }
      var flag = false;
      if(that.employeeList && that.selectEmployee) {
        for(var i = 0; i < that.employeeList.length; i++) {
          if(that.employeeList[i] === that.selectedEmployee) {
            flag = true;
          }
        }
      }
      if(!flag) {
        that.employeeError = 'Employee name typed does not match an employee in the data';
        return false;
      }
      $timeout(function() {
        that.selectedTeam = '';
        that.selectedEmployee = '';
        alert('Successful');
      }, 0);


    }
  }
}
export default employeeComponent;
