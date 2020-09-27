import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../models/user';
import {Post} from '../../models/post';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { PostService } from 'src/app/services/post.service';
import {ActivatedRoute} from '@angular/router';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent {
  @Input()
  user: User;
  id: number;
  postList: Post[] = [];

  
  // constructor(
  //   // private postService: PostService,
  //   private activatedRoute: ActivatedRoute) {
     
  //     this.activatedRoute.data.subscribe(value => console.log(value));

  //     this.activatedRoute.data.subscribe(value => this.postList = value.xxx);
  //     console.log(this.postList)
  //     console.log(this.user)
  // }


  constructor() {
   
     
   } 
  
  

}

