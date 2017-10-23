export function imagifyFilter(EmojiPages) {
  'ngInject';

  const regex = EmojiPages.getRegExp();

  return (input) => {
    if (!input) return '';

    return input.replace(regex, (match, text) => {
      let className = text.replace(/_/g, '-');
      return `<img class="emoji emoji-${className}">`;
    })
  };
}
