import { Component, OnInit } from '@angular/core';

import { UserInterface } from 'src/app/models/user.interface';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-users-list',
  templateUrl: './users-list.component.html'
})
export class UsersListComponent implements OnInit {

  users: Array<UserInterface> = [];

  constructor(private userService: UserService) { }

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers(): void {
    this.userService.getUsers().subscribe(Response => {
      this.users = Response;
    });
  }

  deleteUser(id: number): void {
    this.userService.deleteUser(id).subscribe(response => {
      console.log('Usuario Excluido');
    }, (err) => {
      console.log(err)
    }, () => {
      this.getUsers();
    })
  }

}
