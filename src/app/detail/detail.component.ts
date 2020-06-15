import { Component, OnInit, Input } from '@angular/core';
import { Quote } from '../quote';
@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  @Input() quote: Quote;
  toggleDetails(index){
    this.quote[index].showDescription = !this.quote[index].showDescription;
  }
  constructor() { }

  ngOnInit(): void {
  }

}
