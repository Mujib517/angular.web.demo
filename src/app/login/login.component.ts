import { Component } from '@angular/core';
import { AuthService } from '../shared/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  template: `
    <div class="col-md-5">
      <h1>Login</h1>
      <div class="form-group">  
          <input type="text" placeholder="Email" class="form-control" [(ngModel)]="user.email"/>
      </div>
      <div class="form-group">  
          <input type="password" placeholder="Password" class="form-control" [(ngModel)]="user.password"/>
      </div>
      <div class="form-group">  
          <button (click)="onLogin()" class="btn btn-success">Login</button>
      </div>
    </div>
  `
})
export class LoginComponent {
  user: any = {};

  constructor(private authSvc: AuthService,private router:Router) { }

  onLogin() {
    this.authSvc.login(this.user)
      .subscribe(
      (response) => {
        this.authSvc.saveToken(response["token"]);
        this.router.navigate(["/products"])
      },
      err => console.log(err)
      );
  }
}
