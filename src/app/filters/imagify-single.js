export function imagifySingleFilter(EmojiPages, bfEmojiPickerUtils) {
  'ngInject';

  const regex = EmojiPages.getRegExp();
  const isRetina = bfEmojiPickerUtils.isRetina;

  return (input, path='') => {
    if (!input) return '';

    return input.replace(regex, (match, text) => {
      return `<img src="${path}/images/emoji-icons${isRetina ? '@80' : '@40'}/${text}.png"
                   class="emoji-single"
                   title=":${text}:"
                   alt="${text}">`;
    });
  };
}
