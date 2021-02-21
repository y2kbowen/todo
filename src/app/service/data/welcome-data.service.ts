import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import { API_URL } from 'src/app/app.constants';

export class HelloWorldBean {
  constructor(public message:string) {}
}


@Injectable({
  providedIn: 'root'
})
export class WelcomeDataService {

  constructor(private http:HttpClient) { }

  executeHelloWorldBeanService() {
    return this.http.get<HelloWorldBean>('${API_URL}/hello_bean')
  }

  executeHelloWorldBeanServiceWithParm(username:string) {

    // let basicAuthHeaderString = this.createBasicAuthenticationHttpHeader();
    // let headers = new HttpHeaders({
    //   Authorization: basicAuthHeaderString
    // })

    return this.http.get<HelloWorldBean>(`${API_URL}/hello_bean/path-variable/${username}`,
    // {headers}
    )
  }


  // createBasicAuthenticationHttpHeader() {
  //   let username = 'user'
  //   let password = 'dummy'
  //   let basicAuthHeaderString = 'Basic ' + window.btoa(username + ':' + password);

  //   return basicAuthHeaderString;

  // }




}
