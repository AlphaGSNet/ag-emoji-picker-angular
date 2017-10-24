export function imagifyFilter(EmojiPages) {
  'ngInject';

  const regex = EmojiPages.getRegExp();

  return (input) => {
    if (!input) return '';

    return input.replace(regex, (match, text) => {
      let className = text.replace(/_/g, '-');
      return `<img src="data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7"
                   class="emoji emoji-${className}" 
                   title=":${text}:" 
                   alt="${className}">`;
    })
  };
}
