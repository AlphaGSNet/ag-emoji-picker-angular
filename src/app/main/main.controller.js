export class MainController {
  constructor(){
    this.message = 'test'
    this.open = true;
  }

  close(){
    this.open = false;
  }

  addEmoji(emoji){
    this.message += emoji
  }
}
