import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todos } from 'models/Todos';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TodoService {

  constructor(private http: HttpClient) { }

  getTodosOfUser(userId:number):Observable<Todos[]>{
    return this.http.get<Todos[]>("https://jsonplaceholder.typicode.com/todos?userId=" + userId);
  }
}
