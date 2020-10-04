import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AllUsersComponent} from './components/all_users/all_users.component';
import {UserComponent} from './components/user/user.component';
import {UserService} from './services/user.service';
import {HttpClientModule} from '@angular/common/http';
import {RouterModule, Routes} from '@angular/router';


const routes: Routes = [
  // faters url + own url segment
  {
    // /users
    path: '', component: AllUsersComponent, children: [
      // /users/10
      {path: ':id', component: UserComponent}
    ]
  }
];

@NgModule({
  declarations: [
    AllUsersComponent,
    UserComponent
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    RouterModule.forChild(routes)
  ],
  exports: [
    AllUsersComponent
  ],
  providers: [UserService]
})
export class UserModule {
}