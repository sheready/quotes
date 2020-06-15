import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Quote } from '../quote';


@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() quote: Quote;
  @Output() isComplete = new EventEmitter<boolean>();
  toggleDetails(index){
    this.quote[index].showDescription = !this.quote[index].showDescription;
  }
  quoteComplete(complete: boolean){
     this.isComplete.emit(complete);
   }
  constructor() { }

  ngOnInit(): void {
  }

}
