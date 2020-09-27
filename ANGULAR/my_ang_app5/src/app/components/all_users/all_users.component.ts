import {Component} from '@angular/core';
import {User} from '../../models/user';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-all_users',
  templateUrl: './all_users.component.html',
  styleUrls: ['./all_users.component.css']
})
export class AllUsersComponent {

  usersList: User[] = [];


  constructor(
              private activatedRoute: ActivatedRoute
  ) {
    //   this.userService.getUsers()
    //     .subscribe(value => this.usersList = value);
    this.activatedRoute.data.subscribe(value => console.log(value));

    this.activatedRoute.data.subscribe(value => this.usersList = value.xxx);

  }
}