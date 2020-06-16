import { Component, OnInit, HostBinding } from '@angular/core';
import { Quote } from '../quote';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'row';
votes: number;

constructor() {

this.votes = 0;
}
voteUp() {
this.votes += 1;
}
voteDown() {
this.votes -= 1;
}
ngOnInit(): void {
  }

}
