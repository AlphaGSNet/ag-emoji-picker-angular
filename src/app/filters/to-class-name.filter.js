export function toClassName() {
  'ngInject';

  return (emoji) => {
    if (!emoji) return '';

    return emoji.replace(/_/g, '-')
  };
}
