import {Component} from '@angular/core';
import {Post} from '../../models/post';
import { PostService } from 'src/app/services/post.service';
import {ActivatedRoute, Router} from '@angular/router';

@Component({
  selector: 'app-all_user_post',
  templateUrl: './all_user_post.component.html',
  styleUrls: ['./all_user_post.component.css']
})
export class UserPostsComponent {

  postList: Post[] = [];

  constructor(private router: Router,
              private postService: PostService,
              private activatedRoute: ActivatedRoute
  ) {
    this.activatedRoute.params.subscribe(params => {
      this.postService.getPostByUserId(history.state.xxx).subscribe(value => {
      this.postList=value;
      console.log(this.postList)
    })
    
 } )
    }
  }

