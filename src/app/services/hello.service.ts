import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {HelloMessage} from '../models/hello-message.model';

@Injectable({
  providedIn: 'root'
})
export class HelloService {
  private rootUrl: string;
  constructor(private httpClient: HttpClient) {
    this.rootUrl = 'http://localhost:9002';
  }

  /**
   * Returns an observable of the response of the public spring boot REST /guest/hello request.
   *
   * @returns
   * Returns an Observable of the REST /guest/hello response
   */
  sayHelloToGuest(): Observable<HelloMessage> {
    return this.httpClient.get<HelloMessage>(`${this.rootUrl}/guest/hello`);
  }
  /**
   * Returns an observable of the response of the user role protected secured spring boot REST /user/hello request.
   *
   * @returns
   * Returns an Observable of the REST /user/hello response
   */
  sayHelloToUser(): Observable<HelloMessage> {
    return this.httpClient.get<HelloMessage>(`${this.rootUrl}/user/hello`);
  }
  /**
   * Returns an observable of the response of the admin role protected spring boot REST /admin/hello request.
   *
   * @returns
   * Returns an Observable of the REST /admin/hello response
   */
  sayHelloToAdmin(): Observable<HelloMessage> {
    return this.httpClient.get<HelloMessage>(`${this.rootUrl}/admin/hello`);
  }
}
