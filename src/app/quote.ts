export class Quote {
  showDescription: boolean;
  constructor(public name: string, public author: string, public quote: string, public description: string, public completeDate: Date){
    this.showDescription = false;
  }

}
