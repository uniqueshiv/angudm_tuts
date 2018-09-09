import { 
  Directive,
  Renderer2,
  ElementRef, 
  HostListener, 
  HostBinding,
  Input
 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective {
  @Input() defaultColor:string = 'tranparent';
  @Input('appBetterHighlight') highlightColor:string='blue';
  @HostBinding('style.backgroundColor') backgroundColor:string=this.defaultColor;

  constructor(
    private renderer:Renderer2,
    private elRef:ElementRef
  )
  { }

  ngOnInit() {
    this.backgroundColor=this.defaultColor
    //this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue')
  }

  @HostListener('mouseenter') mouseover(eventData:Event){
    //this.renderer.setStyle(this.elRef.nativeElement,'background-color','blue')
    this.backgroundColor=this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData:Event){
    //this.renderer.setStyle(this.elRef.nativeElement,'background-color','transparent')
    this.backgroundColor=this.defaultColor;
  }

}
