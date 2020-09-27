import {Component} from '@angular/core';
import {Post} from '../../models/post';
import { PostService } from 'src/app/services/post.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-all_user_post',
  templateUrl: './all_user_post.component.html',
  styleUrls: ['./all_user_post.component.css']
})
export class UserPostsComponent {

  postList: Post[] = [];


  constructor(private activatedRoute: ActivatedRoute,
    private postService: PostService) {

this.activatedRoute.params.subscribe(params => {
console.log(params)
this.postService.getPostByUserId(params.id).subscribe(value => {
this.postList=value;
console.log(this.postList)
})
})

} 


}