import {Component, Input, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Post } from '../../models/post';


@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent {
    @Input()
   post: Post
    

  constructor(
    // private userService: UserService
    ) {
   
  }
  
  // FindUser(post:Post) {
  //   console.log(post.id)
  //   this.userService.getUserById(post.userId).subscribe(value => 
  //     console.log(value))
    
  // }

  

}

