import { Component, OnInit } from '@angular/core';
import { HttpClientModule, HttpClient, HttpErrorResponse } from '@angular/common/http';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'cmail-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login = {
    email : "",
    password : ""
  }
  mensagemErro: any;

  constructor(
    private httpClient: HttpClient
  ) { }

  ngOnInit(): void {
  }

  handleLogin(form:  NgForm) {

    if(form.valid) {
      this.httpClient
      .post('http://localhost:3200/login', this.login)
      .subscribe(
        (response: any) => {
          localStorage.setItem('cmail-token', response.token)
        },
        (responseError: HttpErrorResponse) => {
          this.mensagemErro = responseError.error.body
        }
      )
    }
  }

}
