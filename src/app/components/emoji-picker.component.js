export const emojiPickerComponent = {
  template: `
     <i class="emoji-picker"
       uib-popover-template="'app/templates/emoji-popover.html'"
       popover-is-open="$picker.open"
       popover-placement="{{ !$picker.placement && 'left' || $picker.placement }}"
       popover-title="{{ ::$picker.title }}"><ng-transclude></ng-transclude></i>
  `,
  require: {
    model: '^ngModel'
  },
  transclude: true,
  bindings: {
    open: '<',
    placement: '@',
    title: '@',
    onChangeFunc: '&'
  },
  controllerAs: '$picker',
  controller: class EmojiPickerController {
    constructor($element, EmojiPages) {
      'ngInject';

      this.$element = $element;
      this.pages = EmojiPages.pages || [];
    }

    $onInit() {
      this.selectedPage = this.pages[0];
      this.model.$render = () => this.model.$viewValue || '';
    }

    append(emoji) {
      let localValue = this.model.$viewValue || '';
      localValue += ` :${emoji}:`;

      if (angular.isFunction(String.prototype.trim)) {
        localValue = localValue.trim();
      }

      this.model.$setViewValue(localValue);
      this.triggerOnChange();
    }

    selectPage(page) {
      this.selectedPage = page;
    }

    triggerOnChange() {
      this.onChangeFunc();
    }
  }
};
