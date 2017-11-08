export function emojiAreaDirective(bfEmojiPickerUtils, $window, $filter) {
  'ngInject';
  /* eslint-disable */
  function saveSelection() {
    if ($window.getSelection) {
      let sel = $window.getSelection(), ranges = [];
      if (sel.rangeCount) {
        for (let i = 0, len = sel.rangeCount; i < len; ++i) {
          ranges.push(sel.getRangeAt(i));
        }
      }
      return ranges;
    } else if (document.selection && document.selection.createRange) {
      let sel = document.selection;
      return (sel.type.toLowerCase() !== 'none') ? sel.createRange()
        : null;
    }
  }


  function replaceSelection(content, className) {
    try {
      if ($window.getSelection) {
        let range, sel = $window.getSelection();
        let node = typeof content === 'string' ? document.createTextNode(content) : content;

        if (sel.getRangeAt && sel.rangeCount && $(sel.focusNode).closest('.' + className).size()) {
          range = sel.getRangeAt(0);
          range.deleteContents();
          range.insertNode(node);
          range.setStart(node, 0);

          $window.setTimeout(function () {
            range = document.createRange();
            range.setStartAfter(node);
            range.collapse(true);
            sel.removeAllRanges();
            sel.addRange(range);
          }, 0);
        }
      } else if (document.selection && document.selection.createRange) {
        let range = document.selection.createRange();
        if (typeof content === 'string') {
          range.text = content;
        } else {
          range.pasteHTML(content.outerHTML);
        }
      }
    } catch (e) {
    }
  }

  function restoreSelection(savedSelection) {
    if ($window.getSelection) {
      let sel = $window.getSelection();
      sel.removeAllRanges();
      for (let i = 0, len = savedSelection.length; i < len; ++i) {
        sel.addRange(savedSelection[i]);
      }
    } else if (document.selection && document.selection.createRange) {
      if (savedSelection) {
        savedSelection.select();
      }
    }
  }

  let directive = {
    restrict: 'A',
    link: function (scope, element, attrs) {
      const unsub = bfEmojiPickerUtils.subscribeOnInsert(onEmojiInserted);
      const inputClassName = attrs.emojiArea;
      let selection = null;
      let focused = false;
      let isFirstCLick = true;

      init();

      function onEmojiInserted(e, emoji) {
        element.focus();
        if (isFirstCLick) {
          setSelection();
        }

        if (selection) {
          restoreSelection(selection);
        }

        replaceSelection($($filter('imagify')(emoji))[0], inputClassName);
      }


      function setSelection() {
        if (focused) {
          selection = saveSelection();
          isFirstCLick = false;
        }
      }

      function init() {
        element.on('blur', () => focused = false);
        element.on('focus', () => focused = true);
        $(document.body).on('mousedown', setSelection);
      }

      scope.$on('$destroy', () => {
        $(document.body).off('mousedown', setSelection);
        unsub();
      });
    }
  };

  return directive;

}
