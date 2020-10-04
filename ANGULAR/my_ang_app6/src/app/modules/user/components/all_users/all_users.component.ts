import {Component, OnInit} from '@angular/core';
import {UserService} from '../../services/user.service';
import {User} from '../../models/User';

@Component({
  selector: 'app-all_users',
  templateUrl: './all_users.component.html',
  styleUrls: ['./all_users.component.css']
})
export class AllUsersComponent implements OnInit {


  users: User[];

  constructor(private userService: UserService) {
  }

  async ngOnInit(): Promise<void> {
    const allUsers = await this.userService.getAllUsers();
    this.users = allUsers;
  }

}