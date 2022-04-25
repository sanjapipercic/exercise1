import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Todos } from 'models/Todos';
import { TodoService } from '../todo.service';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {
  todos: Todos[] = [];
  constructor(
    private route: ActivatedRoute,
    private todoService: TodoService
    ) { }

  ngOnInit(): void {
    const userId = Number(this.route.snapshot.paramMap.get('userId'));
    this.GetTodosOfUser(userId);
  }

  GetTodosOfUser(userId: number){
    this.todoService.getTodosOfUser(userId)
    .subscribe(data => {
      this.todos = data;
    });
  }

}
