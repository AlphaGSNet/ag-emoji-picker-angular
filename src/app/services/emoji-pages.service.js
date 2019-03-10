export class EmojiPages {
  constructor() {
    const p1 = [
      'grinning', 'smiley', 'smile', 'grin', 'satisfied', 'sweat_smile', 'joy', 'rolling_floor_laughing',
      'relaxed', 'blush', 'innocent', 'slightly_smile_face', 'sarcasm', 'wink', 'relieved', 'heart_eyes',
      'kissing_heart', 'kissing', 'kissing_smiling_eyes', 'kissing_closed_eyes', 'yum', 'wink2',
      'stuck_out_tongue_closed_eyes', 'stuck_out_tongue', 'money_mouth_face', 'hugging', 'nerd_face', 'sunglasses',
      'clown_face', 'cowboy', 'smirk', 'unamused', 'disappointed', 'pensive', 'worried', 'confused', 'slightly_sad', 'megafrown',
      'persevere', 'confounded'
    ];

    const p2 = [
      'weary', 'tired_face', 'triumph', 'angry', 'rage', 'no_mouth', 'neutral_face', 'expressionless',
      'hushed', 'frowning', 'anguished', 'open_mouth', 'astonished', 'dizzy_face', 'flushed', 'scream', 'fearful',
      'cold_sweat', 'cry', 'drool', 'sob', 'sweat', 'sleepy', 'sleeping', 'eye_roll', 'thinking',
      'liar', 'grimacing', 'zipper_mouth', 'disgust', 'gesundheit', 'mask', 'thermometer_face', 'injured', 'smiling_imp',
      'imp', 'open_hands', 'raised_hands', 'clap', 'pray'
    ];

    const p3 = [
      'handshake', 'thumbsup', 'thumbsdown', 'punch', 'fist', 'left_fist_bump',
      'right_facing_fist', 'good_luck', 'v', 'sign_horns_hand', 'ok_hand',
      'point_left', 'point_right', 'point_up_2',
      'point_down', 'point_up', 'hand', 'backhand', 'splayed_hand', 'spock', 'wave', 'shaka', 'muscle', 'middle_finger',
      'writing_hand',
      'poop', 'dark_sunglasses', 'fire', 'rainbow', 'star', 'sunny', 'sun_small_cloud', 'sun_behind_large_cloud', 'partly_sunny', 'cloud',
      'cloud_with_rain', 'thunder', 'thought_balloon', 'snowflake', 'dash', 'droplet', 'umbrella'
		];
		
		const p4 = [
			'bee_white'
		];

		this.all = p1.concat(p2, p3, p4);
		this.allEmojies = p1.concat(p2, p3);
		this.allAnimojies = p4;

    this.pages = [
      {
				name: 'Page 1',
				type: 'emoji',
        page: 1,
        icons: p1
      }, {
        name: 'Page 2',
				type: 'emoji',
        page: 2,
        icons: p2
      }, {
        name: 'Page 3',
				type: 'emoji',
        page: 3,
        icons: p3
      }, {
        name: 'Page 4',
				type: 'animoji',
        page: 4,
        icons: p4
      }
    ]
  }

  getEmojiRegExp() {
    return new RegExp(`:(${this.allEmojies.join('|')}):`, 'g');
  }

  getAnimojiRegExp() {
    return new RegExp(`%(${this.allAnimojies.join('|')})%`, 'g');
  }
}
