import { Component, OnInit } from '@angular/core';
import { User } from 'models/User';
import { Observable } from 'rxjs';
import { UserService } from '../user.service';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {

  users: User[] = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.GetUsers();
    }
  GetUsers(){
    this.userService.getUsers()
    .subscribe(data => {this.users = data;
    });
  }

  }


