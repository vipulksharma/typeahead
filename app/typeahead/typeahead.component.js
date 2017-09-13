import typeaheadHtml from './typeahead.html';

/* @ngInject */
let typeaheadComponent = {
  template: typeaheadHtml,
  controllerAs: 'typeahead',
  bindings : {
    searchData : '=',
    searchkey : '=',
    selectedSearch : '=',
    onSelect : '&',
    placeholder : '<'
  },
  controller: function($scope, $timeout) {
    const that = this;
    that.employeeData = {};
    that.modalShown = true;
    that.hideItemList = function() {
      that.showSearchDropDown = false;
      if(that.selectedSearchTemp && !that.selectedSearch) {
        that.selectedSearch = that.selectedSearchTemp;
      }
    }

    that.showItemList = function(){
      that.showSearchDropDown = true;
      that.selectedSearchTemp = that.selectedSearch;
      that.selectedSearch = 'a';
      $timeout(function() {
        that.selectedSearch = '';
      },0)
    }

    that.filterData = function(list, searchText, key) {
      if (!searchText) {
        return list;
      }
      var result = [];
      var searchItems1 = [];
      var searchItems2 = [];
      var searchItems3 = [];
      angular.forEach(list, function (item) {
        const regex = new RegExp(searchText, 'i');
        var finalItem = key ? item[key] : item;
        if (regex.test(finalItem.substring(0, searchText.length))) {
          searchItems1.push(item);
        } else if (regex.test(finalItem.substring(searchText.length))) {
          searchItems2.push(item);
        } else if (finalItem.indexOf(searchText) > -1) {
          searchItems3.push(item);
        }
      });
      return result.concat(searchItems1).concat(searchItems2).concat(searchItems3);
    }

    $scope.$watch(angular.bind(this, function () {
      return this.selectedSearch;
    }), function (newVal) {
      that.searchFilteredData = that.filterData(that.searchData, newVal, that.searchkey);
    });

    that.selectSearch = function(searches) {
      that.selectedSearch = that.searchkey ? searches[that.searchkey] : searches;
      that.onSelect({searches:searches});
    }

  }
}
export default typeaheadComponent;
