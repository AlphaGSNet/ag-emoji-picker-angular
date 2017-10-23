export function onScrollDirective($parse, Utils) {
  'ngInject';

  let directive = {
    restrict: 'A',
    link: function (scope, element, attrs) {
      let handler = $parse(attrs.pickerScroll);

      let handleWebkitMouseWheel = Utils.debounce((e) => {
        let position = e.originalEvent.wheelDelta < 0 ? 'down' : 'up';
        scope.$apply(() => handler(scope, {position: position}));
      }, 50, true);

      let handleFirefoxMouseWheel = Utils.debounce((e) => {
        let position = e.originalEvent.detail > 0 ? 'down' : 'up';
        scope.$apply(() => handler(scope, {position: position}));
      });

      element.on('mousewheel', handleWebkitMouseWheel);
      element.on('DOMMouseScroll', handleFirefoxMouseWheel);
    }
  };

  return directive;
}
