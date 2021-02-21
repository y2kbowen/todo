import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BasicAuthenticationService } from '../service/basic-authentication.service';
import { HardcodedAuthenticationService } from '../service/hardcoded-authentication.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  invalidLoginMessage: string = "Invalid Login. Try again."
  username: string
  password: string
  invalidLogin: boolean


  constructor(private router: Router,
    private hardcodedAuthenticationService: HardcodedAuthenticationService,
    private basicAuthenticationService: BasicAuthenticationService) { }

  ngOnInit(): void {
    this.username = "defaultuser"
    this.password = ""
    this.invalidLogin = false
  }

  onBtnLoginClick(): void {
    if (this.hardcodedAuthenticationService.authenticate(this.username, this.password)) {
      this.router.navigate(['welcome', this.username])
      this.invalidLogin = false;
    } else {
      this.invalidLogin = true;
    }
  }

  handleJWTLogin() {
    this.basicAuthenticationService.executeJWTAuthenticationService(this.username,this.password)
    .subscribe(
      data => {
        this.router.navigate(['welcome', this.username])
        this.invalidLogin = false;  
      },
      error => {
        this.invalidLogin = true;
      }
    )

  }

}
