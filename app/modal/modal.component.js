import modalHtml from './modal.html';

/* @ngInject */
const modalComponent = {
    bindings: {
      'show': '=',
      'width' : '<',
      'height' : '<',
      'hideModal' : '&'
    },
    transclude: true, // we want to insert custom content inside the directive
    controllerAs: 'modal',
    controller: function() {
      var that = this;
      this.$onInit = function() {
        that.dialogStyle = {};
        if (that.width) {
          that.dialogStyle.width = that.width + 'px';
        }
        if (that.height) {
          this.dialogStyle.height = that.height + '%';
        }
      }

      that.hide = function() {
        that.hideModal();
      };
    },
    template: modalHtml
}
export default modalComponent;
