import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBackgroundColor]'
})
export class BackgroundColorDirective {

  constructor(private elem: ElementRef) {}

  @HostListener('click') onClicks(){
     this.textDeco('underline');
  }
  private textDeco(action: string){
     this.elem.nativeElement.style.textDecoration = action;
  }

   }


