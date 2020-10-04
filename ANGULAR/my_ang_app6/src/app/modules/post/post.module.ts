import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {PostsComponent} from './components/all_posts/all_posts.component';
import {PostComponent} from './components/post/post.component';
import {PostService} from './services/post.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  // faters url + own url segment
  {
    // /posts
    path: '', component: PostsComponent,
  }
];

@NgModule({
  declarations: [
   PostsComponent,
    PostComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    PostsComponent
  ],
  providers: [PostService]
})
export class PostModule {
}