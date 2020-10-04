import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HttpClientModule} from '@angular/common/http';
import {PostResolveService} from './modules/post/services/post-resolve.service';
import {AppComponent} from './app.component';

import {PostsComponent} from './modules/post/components/all_posts/all_posts.component';
import {PostModule} from './modules/post/post.module';

const routes: Routes = [
  {path: 'users', loadChildren: () => import('./modules/user/user.module').then(m => m.UserModule),
 }
,
{path: 'posts', component: PostsComponent , resolve: {xxxx: PostResolveService}
},
];

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    PostModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}