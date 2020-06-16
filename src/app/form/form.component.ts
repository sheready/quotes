import { Component, OnInit, HostBinding } from '@angular/core';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {

addArticle(name: HTMLInputElement, author: HTMLInputElement, quote: HTMLInputElement, completeDate: HTMLInputElement ): boolean{

  return false;
}

constructor() {

}

  ngOnInit(): void {
  }

}
