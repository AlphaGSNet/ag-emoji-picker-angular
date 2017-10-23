export class EmojiPages {
  constructor() {
    const p1 = [
      'grinning', 'smiley', 'smile', 'grin', 'laughing', 'sweat_smile', 'joy', 'rolling_floor_aughing',
      'relaxed', 'blush', 'innocent', 'slightly_smiling_face', 'sarcasm', 'wink', 'relieved', 'heart_eyes',
      'kissing_heart', 'kissing', 'kissing_smiling_eyes', 'kissing_closed_eyes', 'yum', 'stuck_out_tongue_winking_eye',
      'stuck_out_tongue_closed_eyes', 'stuck_out_tongue', 'money_mouth_face', 'hugging', 'nerd_face', 'sunglasses',
      'clown_face', 'cowboy', 'smirk', 'unamused', 'disappointed', 'pensive', 'worried', 'confused', 'slightly_sad', 'megafrown',
      'persevere', 'confounded'
    ];

    const p2 = [
      'weary', 'tired_face', 'triumph', 'angry', 'rage', 'no_mouth', 'neutral_face', 'expressionless',
      'hushed', 'frowning', 'anguished', 'open_mouth', 'astonished', 'dizzy_face', 'flushed', 'scream', 'fearful',
      'cold_sweat', 'disappointed_relieved', 'cry', 'drool', 'sob', 'sweat', 'sleepy', 'sleeping', 'eye_roll', 'thinking',
      'liar', 'grimacing', 'zipper_mouth', 'disgust', 'gesundheit', 'mask', 'thermometer_face', 'injured', 'smiling_imp',
      'imp', 'open_hands', 'raised_hands', 'clap'
    ];

    const p3 = [
      'pray', 'handshake', 'thumbsup', 'thumbsdown', 'facepunch', 'fist', 'left_fist_bump',
      'right_facing_fist', 'good_luck', 'v', 'sign_horns_hand', 'ok_hand',
      'point_left', 'point_right', 'point_up_2',
      'point_down', 'point_up', 'hand', 'backhand', 'splayed_hand', 'spock', 'wave', 'shaka', 'muscle', 'middle_finger',
      'writing_hand',
      'poop', 'dark_sunglasses', 'fire', 'rainbow', 'star', 'sunny', 'sun_small_cloud', 'sun_behind_large_cloud', 'cloud',
      'cloud_with_rain', 'thunder', 'snowflake', 'dash', 'droplet', 'umbrella'
    ];


    this.all = p1.concat(p2, p3);

    this.pages = [
      {
        name: 'Page 1',
        page: 1,
        icons: p1
      }, {
        name: 'Page 2',
        page: 2,
        icons: p2
      }, {
        name: 'Page 3',
        page: 3,
        icons: p3
      }
    ]
  }

  getRegExp() {
    return new RegExp(`:(${this.all.join('|')}):`, 'g');
  }
}
