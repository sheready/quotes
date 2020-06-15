export class Quote {
  showDescription: boolean;
  constructor(public name: string, public author: string, public quote: string, public description: string){
    this.showDescription = false;
  }

}
