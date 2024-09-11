import { Directive, ElementRef } from '@angular/core';

@Directive({
  selector: '[appCustom]'
})
export class CustomDirective {

  constructor(private el: ElementRef) {
    console.log('custom directive applied', el.nativeElement);
   
    el.nativeElement.style.backgroundColor = 'gray';
    el.nativeElement.style.fontSize = '20px';
    
   }

}
