import {Component, Input, OnInit} from '@angular/core';
import {User} from '../../models/user';
import {Observable} from 'rxjs';
import {HttpClient} from '@angular/common/http';
import { Post } from '../../models/post';
import { PostService } from 'src/app/services/post.service';
import {ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-user-post',
  templateUrl: './user-post.component.html',
  styleUrls: ['./user-post.component.css']
})
export class UserPostComponent {
  @Input()
    post:Post;
    
    

  constructor() {

    
  } 


}

