import { Component, OnInit, HostBinding, Input } from '@angular/core';
import { Quote } from '../quote';
import { Article } from '../article';
@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.css']
})
export class ArticleComponent implements OnInit {

  @HostBinding('attr.class') cssClass = 'row';
   article: Article;

   constructor() {
     this.article = new Article (0);
}


voteUp(): boolean {
  this.article.votes += 1;
  return false;
  }
  voteDown(): boolean {
  this.article.votes -= 1;
  return false;
  }
ngOnInit(): void {
  }

}
