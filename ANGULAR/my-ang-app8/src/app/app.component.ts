import {Component} from '@angular/core';
import {NgForm, NgModel} from '@angular/forms';
import {User} from './models/user';
import {Post} from './models/post';
import {UserService} from './services/user.service';
import {PostService} from './services/post.service';
import {Router} from '@angular/router';
import {FormControl, FormGroup} from '@angular/forms';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-ang-app8';
  users: User[];
  user: User={id:0,name:'',username:''};
  posts: Post[];
  post: Post={id:0};
  form: FormGroup;
  


  constructor(private userService: UserService,private postService: PostService
) { }

ngOnInit(): void {
  this.userService.getUsers().subscribe(value => this.users = value);
  this.form = new FormGroup({
    id: new FormControl(1)
  });
  this.searchUser(this.form);
  console.log(this.form)
}

  
  searchUser(form: FormGroup): void {  
  console.log(this.form)     
  this.userService.getUserById(form.controls.id.value).subscribe(value => 
  this.user=value   )
   console.log(this.user)
}

 getPostByUserId(form: FormGroup): void {
  console.log(this.form) 
  const id=form.controls.id.value;
  console.log(id)
  this.postService.getPostByUserId(id).subscribe(value => 
  this.posts=value)
  console.log(this.posts)
}

}

