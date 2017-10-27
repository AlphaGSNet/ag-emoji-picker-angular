export class MainController {
  constructor(){
    this.message = 'test'
    this.open = 1;
  }

  close(){
    this.open += 1;
  }
}
