import { Directive, TemplateRef, ViewContainerRef } from "@angular/core";

@Directive({
    selector: '[dlIf]',
    inputs: ['dlIf']
})
export class IfDirective {

    constructor(private templateRef: TemplateRef<any>, private container: ViewContainerRef) { }

    set dlIf(val: boolean) {
        if (val) {
            this.container.createEmbeddedView(this.templateRef);
        }
        else {
            this.container.clear();
        }
    }
}