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
    new Quote('Sam', 'Nipsey Hussle', 'Life is a Marathon', ' The Author is Nipsey Hussle'),
    new Quote ('Cane', 'Marilyn Monroe', 'We learn daily', ' Great beauty'),

  ];
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
