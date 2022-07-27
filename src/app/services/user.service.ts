import { UserCreate } from './../models/user-create.model';
import { User } from './../models/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'https://localhost:7193/api/users'

  constructor(private httpClient: HttpClient) {
  }

  getAll(): Observable<User[]> {
    return this.httpClient.get<User[]>(this.url);
  }
  getById(id : number){
    return this.httpClient.get<User>(this.url + `/${id}` );
  }
  createUser(user : UserCreate): Observable<User> {
    return this.httpClient.post<User>(this.url, user);
  }
}
