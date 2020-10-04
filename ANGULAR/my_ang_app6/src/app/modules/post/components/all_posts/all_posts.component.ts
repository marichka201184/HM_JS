import {Component} from '@angular/core';
import {Post} from '../../models/post';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-all_posts',
  templateUrl: './all_posts.component.html',
  styleUrls: ['./all_posts.component.css']
})
export class PostsComponent {

  postList: Post[] = [];


  constructor(/*private userService: UserService,*/
              private activatedRoute: ActivatedRoute
  ) {
    //   this.userService.getUsers()
    //     .subscribe(value => this.usersList = value);
    this.activatedRoute.data.subscribe(value => console.log(value));

    this.activatedRoute.data.subscribe(value => this.postList = value.xxxx)
    console.log(this.postList);

  }
}