import { Injectable } from '@angular/core';
import { User } from './user';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private UserUrl = "https://jsonplaceholder.typicode.com/users";

  constructor(private http:HttpClient) { }

  getUser(): Observable<User[]> {
    return this.http.get<User[]>(this.UserUrl);
  }
}
