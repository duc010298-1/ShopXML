import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Subject } from 'rxjs';
import { LoaderState } from '../loader';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RestService {
  loaderSubject = new Subject<LoaderState>();
  loaderState = this.loaderSubject.asObservable();

  private signInUrl = environment.apiUrl + "/users/sign-in/";
  private signUpUrl = environment.apiUrl + "/users/sign-up/";
  private getProductUrl = environment.apiUrl + "/products/";

  constructor(
    private _http: HttpClient
  ) { }

  show() {
    this.loaderSubject.next(<LoaderState>{ show: true });
  }
  hide() {
    this.loaderSubject.next(<LoaderState>{ show: false });
  }

  signIn(username: string, password: string) {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    return this._http.post(this.signInUrl, formData, { responseType: 'text' });
  }

  signUp(username: string, password: string, fullName: string, email: string, phone: string) {
    const formData = new FormData();
    formData.append('username', username);
    formData.append('password', password);
    formData.append('fullName', fullName);
    formData.append('email', email);
    formData.append('phone', phone);
    return this._http.post(this.signUpUrl, formData, { responseType: 'text' });
  }

  getProduct(pageSize: any, pageIndex: any, sortMode: any) {
    let params = new HttpParams()
      .set('pageSize', pageSize)
      .set('pageIndex', pageIndex)
      .set('sortMode', sortMode);
    return this._http.get(this.getProductUrl, { params: params, responseType: 'text' });
  }
}