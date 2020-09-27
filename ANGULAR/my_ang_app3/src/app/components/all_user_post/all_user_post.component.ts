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
  id:number;


  constructor(private router: Router,private postService: PostService
  ) {
   console.log(this.router.getCurrentNavigation().extras.state.xxx)     
   this.postService.getPostByUserId(this.router.getCurrentNavigation().extras.state.xxx).subscribe(value => {
   this.postList=value;
 } )
    }
  }

