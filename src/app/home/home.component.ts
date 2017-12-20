import { Component } from "@angular/core";

//ES6 Module
@Component({
    selector: 'app-home',
    template: ` 

   

    <table border="1">
        <tr>
            <td>Value</td>
            <td>Index</td>
            <td>Even</td>
            <td>Odd</td>
            <td>First</td>
            <td>Last</td>
        </tr>
        <tr *ngFor="let number of arr;let idx=index;let evn=even;let odd=odd;let fst=first;let lst=last;" [ngClass]="evn?'fg':'fg2'">
            <td>{{number}}</td>
            <td>{{idx}}</td>
            <td>{{evn}}</td>
            <td>{{odd}}</td>
            <td>{{fst}}</td>
            <td>{{lst}}</td>
        </tr>
        
    </table>


    <h1 [ngClass]="obj">{{title}}</h1>
    <h1 [ngStyle]="style">{{title}}</h1>

    <input type="text" [(ngModel)]="title"/>

    <div [ngSwitch]="priority">
        <h3 *ngSwitchCase="'high'">High priority Task</h3>
        <h3 *ngSwitchCase="'medium'">Medium priority Task</h3>
        <h3 *ngSwitchCase="'low'">Low priority Task</h3>
        <h3 *ngSwitchDefault>Very low priority</h3>
    </div>

    `
})
export class HomeComponent {

    arr: number[] = [1, 2, 3, 4, 5];
    title: string = "Home Page";
    style = { 'background-color': 'blue', 'border': '3px solid black' };

    priority: string = "lo111w";
    cls = ["red", "green"];
    obj = { red: false, green: true };
}