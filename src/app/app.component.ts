import { Component } from '@angular/core';
import { Quote } from './quote';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'quotes';
  quote: Quote[] = [
    {name: 'Sam', author: 'Nipsey Hussle', quote: 'Life is a Marathon'},
    {name: 'Cane', author: 'Kobe Bryant', quote: 'We learn daily'},

  ];
}
