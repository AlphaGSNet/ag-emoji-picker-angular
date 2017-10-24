export function onScrollDirective($parse, bfEmojiPickerUtils) {
  'ngInject';

  let directive = {
    restrict: 'A',
    link: function (scope, element, attrs) {
      let handler = $parse(attrs.pickerScroll);

      let handleWebkitMouseWheel = bfEmojiPickerUtils.debounce((e) => {
        let position = e.originalEvent.wheelDelta < 0 ? 'down' : 'up';
        scope.$apply(() => handler(scope, {position: position}));
      }, 100, true);

      let handleFirefoxMouseWheel = bfEmojiPickerUtils.debounce((e) => {
        let position = e.originalEvent.detail > 0 ? 'down' : 'up';
        scope.$apply(() => handler(scope, {position: position}));
      }, 100, true);

      element.on('mousewheel', handleWebkitMouseWheel);
      element.on('DOMMouseScroll', handleFirefoxMouseWheel);
    }
  };

  return directive;
}
