import { Directive, Renderer, ElementRef, OnInit, HostListener } from '@angular/core';

@Directive({
    selector: '[appAutoHeight]'
})
export class AutoHeightDirective implements OnInit {

    constructor( private renderer: Renderer, private elementRef: ElementRef ) {
    }

    ngOnInit() {
        this.applyLayoutHeight(this.getLayoutHeight());
    }

    getLayoutHeight(): number {
        return window.innerHeight - this.elementRef.nativeElement.offsetTop -10;
    }

    applyLayoutHeight( heightLayout: number ) {
        this.renderer.setElementStyle(this.elementRef.nativeElement, 'height', `${heightLayout}px`);
    }

    @HostListener('window:resize')
    onResize() {
        this.applyLayoutHeight(this.getLayoutHeight());
    }
}
