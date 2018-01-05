import { Directive } from "@angular/core";
import { TemplateRef } from "@angular/core";
import { ElementRef } from "@angular/core";
import { Renderer } from "@angular/core";


@Directive({
    selector: '[dlShow]',
    inputs: ['dlShow']
})
export class ShowDirective {

    constructor(private el: ElementRef, private render: Renderer) { }

    set dlShow(val: boolean) {

        this.render.setElementStyle(this.el.nativeElement, "display", val ? "block" : "none");


        // if (val)
        //     this.render.setElementStyle(this.el.nativeElement, "display", "block");
        // else
        //     this.render.setElementStyle(this.el.nativeElement, "display", "none");
        // if (val) {
        //     this.el.nativeElement.style.display = "block";
        // }
        // else {
        //     this.el.nativeElement.style.display = "none";
        // }
    }
}