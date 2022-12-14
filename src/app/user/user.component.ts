import { Component, OnInit } from '@angular/core';
import { User } from '../user';
import { UserService } from '../user.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  constructor(private userService: UserService) { }

  users: User[]=[];

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void{
    this.userService.getUser()
        .subscribe(users => this.users = users);
  }

}
