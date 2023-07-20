import { AfterViewInit, Directive, ElementRef, OnInit, Input, HostListener } from '@angular/core';

@Directive({
  selector: '[blink]',
  standalone: true
})
export class BlinkDirective implements OnInit, AfterViewInit {
  @Input()
  public blink: string = 'cyan';

  constructor(protected ref: ElementRef) {
  }

  public ngOnInit(): void {
    
  }
  ngAfterViewInit(): void {
    this.ref.nativeElement.style.color = 'blue';
  }

  @HostListener('mouseover')
  public onMouseEnter(): void {
    this.ref.nativeElement.style.color = this.blink;
    console.log("clicked")
  }

}
