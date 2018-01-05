import { Component } from "@angular/core";
import { ConsoleLogger } from "../shared/console.logger.service";

//ES6 Module
@Component({
    selector: 'app-home',
    template: ` 
   <h1>Home Page</h1>

   <h1 [dlShow]="show">THis is a heading</h1>

    `
})
export class HomeComponent {

    show:boolean=false;

    constructor(private logger: ConsoleLogger) { }

    ngOnInit() {
        this.logger.warn("COmponent took long time to load");
    }
}

//Uppercase, lowercase, titlecase, currency, date, async