import { Directive, ElementRef } from "@angular/core";

@Directive({
    selector: '[dlBorder]'
})
export class BorderDirective {
    constructor(private el: ElementRef) {
        el.nativeElement.style.border = "1px solid gray"; 
    }
}