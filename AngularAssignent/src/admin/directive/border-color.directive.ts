import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appBorderColor]'
})
export class BorderColorDirective {
  element: ElementRef;
  constructor(private el:ElementRef) {
    console.log("ref", el);
    
   }

   @HostListener('mouseover')
   onMouseOver(){
    console.log('onmouseover', this.element.nativeElement);
    
      this.element.nativeElement.style.color = 'green';
      this.element.nativeElement.style.border = '2px solid green';
    }
}
