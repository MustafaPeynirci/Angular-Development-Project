import { Router } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  message: string

  constructor(
    public authService: AuthService,
    public router: Router
  ) { }

  ngOnInit(): void {
    this.setMessage()
  }

  login() {
    this.authService.login()
    this.setMessage()
    this.authService.isAuthenticated().then(isAuthenticated => {
      if (isAuthenticated) {
        let redirectUrl = this.authService.redicetUrl ? this.router.parseUrl(this.authService.redicetUrl) : "/admin"
        this.router.navigateByUrl(redirectUrl)
      }
    })
  }
  logout() {
    this.authService.logout()
    this.setMessage()
  }
  setMessage() {
    this.message = "logged "

    this.authService.isAuthenticated().then((isAuthenticated: Boolean) => {
      if (isAuthenticated) {
        this.message += "in"
      }
      else {
        this.message += "out"
      }
    })
  }

}
