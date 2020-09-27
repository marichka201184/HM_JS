import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {HttpClientModule} from '@angular/common/http';
import {UserComponent} from './components/user/user.component';
import {UserPostsComponent} from './components/all_user_post/all_user_post.component';
import {PostComponent} from './components/post/post.component';
import {AllUsersComponent} from './components/all_users/all_users.component';
import {PostsComponent} from './components/all_posts/all_posts.component';
import {RouterModule} from '@angular/router';
import {UserResolveService} from './services/user-resolve.service';
import {PostResolveService} from './services/post-resolve.service';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    UserPostsComponent,
    PostComponent,
    AllUsersComponent,
    PostsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    RouterModule.forRoot([
      {path: 'users', component: AllUsersComponent, resolve: {xxx: UserResolveService},
      children : [{path: 'post', component: UserPostsComponent}]
      },
      
      {path: 'posts', component: PostsComponent, resolve: {xxxx: PostResolveService}
      },
     
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
