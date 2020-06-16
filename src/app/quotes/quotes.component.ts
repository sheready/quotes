import { Component, OnInit } from '@angular/core';
import { Quote } from '../quote';



@Component({
  selector: 'app-quotes',
  templateUrl: './quotes.component.html',
  styleUrls: ['./quotes.component.css']
})
export class QuotesComponent implements OnInit {
  title = 'quotes';
  quote: Quote[] = [
    new Quote('Sam', 'Nipsey Hussle', 'Life is a Marathon', ' From the mixtape Crenshaw', new Date(2019, 6, 9)),
    new Quote ('Cane', 'Marilyn Monroe', 'We learn daily', ' Great beauty', new Date(2019, 6, 9)),

  ];
  addNewQuote(quote){
    quote.completeQuote = new Date(quote.completeQuote);
    this.quote.push(quote);
    return false;
  }
toggleDetails(index){
    this.quote[index].showDescription = !this.quote[index].showDescription;
  }
completeQuote(isComplete, index){
    if (isComplete){
      this.quote.splice(index, 1);
    }
  }


  constructor() { }

  ngOnInit(): void {
  }

}
