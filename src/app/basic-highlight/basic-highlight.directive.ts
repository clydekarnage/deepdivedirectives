import { Directive, ElementRef, OnInit } from '@angular/core';

@Directive({
  selector: '[appBasicHighlight]'
})
export class BasicHighlightDirective implements OnInit {
  constructor(private elementRef: ElementRef) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.elementRef.nativeElement.style.backgroundColor = 'green';
  }
}
