import { Component } from "@angular/core";

//ES6 Module
@Component({
    selector: 'app-home',
    template: `<h1 [class]="cls">{{getTitle()}}</h1>
    
    <h1 [style]="style">{{title?"Yes":"No"}}</h1>

    <button [disabled]="getTitle()">Click me</button>

    <button (click)="onClick(1)">Button 2</button>

    <select (change)="onChanged()">
        <option>Apple</option>
        <option>Samsung</option>
        <option>Sony</option>
    </select>

    `
})
export class HomeComponent {

    title: string = "Angular web";
    cls = "red green";
    style = 'background-color:yellow'

    getTitle(): string {
        //update 
        return this.title;
    }

    onClick(param) {
        console.log("button clicked", param);
    }

    onChanged() {
        console.log("Selection chagned");
    }

    //truthy 
    //falsy  0, "", false, undefined, null, Nan


}