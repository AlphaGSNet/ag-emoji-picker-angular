export const emojiPickerComponent = {
  template: `
     <i class="emoji-picker"
       ng-click="$picker.toggleOpen()"
       uib-popover-template="'app/templates/emoji-popover.html'"
       ng-class="{opened: $picker.open}"
       popover-is-open="$picker.open"
       popover-placement="{{ !$picker.placement && 'left' || $picker.placement }}"
       popover-title="{{ ::$picker.title }}"><ng-transclude></ng-transclude></i>
  `,
  require: {
    model: '?ngModel'
  },
  transclude: true,
  bindings: {
    close: '<',
    placement: '@',
    title: '@',
    onInsert: '&',
    onChangeFunc: '&'
  },
  controllerAs: '$picker',
  controller: class EmojiPickerController {
    constructor($window, $element, EmojiPages, bfEmojiPickerUtils) {
      'ngInject';

      this.$element = $element;
      this.$window = $window;
      this.Utils= bfEmojiPickerUtils;
      this.pages = EmojiPages.pages || [];
    }

    $onInit() {
      this.limit = this.pages.length - 1;
      this.activeIndex = 0;
      this.selectPage(this.activeIndex);
    }

    $onChanges(changes){
      if(changes.close && !changes.close.isFirstChange()){
        this.open = false;
      }
    }

    append(_emoji) {
      let emoji = `:${_emoji}:`;
      this.onInsert({$event: emoji});
      this.Utils.triggerInsertEvent(emoji);
      this.triggerOnChange();
    }

    selectPage(index) {
      this.activeIndex = index;
      this.selectedPage = this.pages[index];
    }

    showNext(position) {
      let index = (position === 'up')
        ? (this.activeIndex + 1) > this.limit ? 0 : this.activeIndex + 1
        : (this.activeIndex - 1) < 0 ? this.limit : this.activeIndex - 1;

      this.selectPage(index);
    }

    triggerOnChange() {
      this.onChangeFunc();
    }
  }
};
