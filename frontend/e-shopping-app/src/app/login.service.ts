import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  // This is IP address of EC2 instance in AWS
  baseUrl:string ="http://18.216.208.177:8181/login";
  
  constructor(public httpClient:HttpClient) { } // DI 

  signIn(login:any):Observable<string> {
    return this.httpClient.post(this.baseUrl+"/signIn",login,{responseType:'text'})
  }

  signUp(login:any):Observable<string> {
    return this.httpClient.post(this.baseUrl+"/signUp",login,{responseType:'text'})
  }
}
