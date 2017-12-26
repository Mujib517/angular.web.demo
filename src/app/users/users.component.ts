import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'app-users',
    template: `
    <h1>Users</h1>
    <div class="col-md-6">
        <div class="well" *ngFor="let user of users | async">
            <h3>{{user.login}}</h3>
            <img width="100" height="100" class="img img-circle" [src]="user.avatar_url"/>
        </div>
    </div>
    `
})

export class UsersComponent {
    users;

    constructor(httpClient: HttpClient) {

        this.users = httpClient.get("https://api.github.com/users");
        // .subscribe(
        // (data) => {
        //     console.log(data);
        //     this.users = data;
        // },
        // (err) => console.log(err)
        // )
    }
}