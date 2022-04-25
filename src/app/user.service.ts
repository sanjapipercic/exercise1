import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { User } from 'models/User';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }


  getUsers():Observable<User[]>{
    return this.http.get<User[]>("https://jsonplaceholder.typicode.com/users");
  }
}
