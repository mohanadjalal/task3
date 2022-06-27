import { Component, OnInit } from '@angular/core';
import { List, userPreview } from '../models/user.model';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css'],
})
export class UserListComponent implements OnInit {
  users: userPreview[] = [];
  userContainer: any;
  constructor(private userSer: UserService) {}

  ngOnInit(): void {
    this.getUsers();
  }

  getUsers() {
    this.userSer.getUsers().subscribe((res) => (this.users = [...res.data]));
  }

  createUser() {
    const body = {
      firstName: 'mohanad',
      lastName: 'jayousi ',
      email: 'jayss@gmail.com',
    };
    
      this.userSer
        .createUser(body)
        .subscribe((res) =>
          console.log(res, 'rressssssssssssssssssssssssssssss')
        );
 
  }

  updateUser(id: any) {
    const body = {
      firstName: 'updated mohanad',
      lastName: 'updated jayousi ',
    };
    this.userSer.updateUser(id, body).subscribe((res) => this.getUsers());
  }

  deleteUser(id: any) {
    this.userSer.deleteUser(id).subscribe((res) => this.getUsers());
  }

  getUserById(id: number): void {
    const strId = id.toString();
    this.userSer.getUserById(strId).subscribe((res) => {
      console.log(res);
    });
  }
}
