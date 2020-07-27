import { Injectable } from '@angular/core';
import { HttpClient , HttpErrorResponse} from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {catchError, tap} from "rxjs/operators"
import { throwError, Observable } from 'rxjs';
import { IUser, AuthType } from '../interface';
@Injectable({
  providedIn: 'root'
})
export class AuthService {
  modal = false;
  get token(){
    return localStorage.getItem('fb-token')
  }

  constructor(private http: HttpClient) { }

  auth(user: IUser,action: AuthType): Observable<any>{
    return this.http.post(`${environment.fbAuthUrl}${action}?key=${environment.fbApiKey}`,user)
    .pipe(
      tap(this.setToken),
      catchError(this.handleError.bind(this))
    )
  }
  handleError(error: HttpErrorResponse){
    const {message} = error.error.error
    switch(message){
      case 'EMAIL_NOT_FOUND':
        console.log("Данный email не найден")
        break;
      case 'INVALID_PASSWORD':
        console.log("Неверный пароль")
        break;
      default:
        console.log(message)
    }
    return throwError(message)
  }
  setToken(response:{[idToken:string]: string}){
    localStorage.setItem('fb-token',response.idToken)
  }
  logout(){
    localStorage.clear()
  }
  isAuthenticated(): boolean {
    return !!this.token
  }
}



