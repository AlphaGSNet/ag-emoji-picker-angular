import {config} from './index.config';
import {runBlock} from './index.run';
import {MainController} from './main/main.controller';
import {EmojiPages} from './services/emoji-pages.service';
import {imagifyFilter} from './filters/imagify.filter'
import {toClassName} from './filters/to-class-name.filter';

import {emojiPickerComponent} from './components/emoji-picker.component';

angular.module('bfEmojiPickerAngular', ['ngSanitize', 'ui.bootstrap'])
  .config(config)
  .run(runBlock)
  .service('EmojiPages', EmojiPages)
  .filter('imagify', imagifyFilter)
  .filter('toClassName', toClassName)
  .component('emojiPicker', emojiPickerComponent)
  .controller('MainController', MainController);
