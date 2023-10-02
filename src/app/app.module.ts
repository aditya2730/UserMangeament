import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { UserComponent } from './users/user.component';
import { HttpClientModule } from '@angular/common/http';
import { AuthentcationGuard } from './user-login/auth.guard';
import { UserLoginComponent } from './user-login/user-login.component';
import { NgxPaginationModule } from 'ngx-pagination';
@NgModule({
  imports: [
    BrowserModule,
    HttpClientModule,
    NgxPaginationModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule.forRoot([
      {
        path: 'login',
        component: UserLoginComponent,
     
      },
      {
        path: 'users',
        component: UserComponent,
        canActivate: [AuthentcationGuard],
      },
      { path: '', redirectTo: 'login', pathMatch: 'full' },
      { path: '**', redirectTo: 'login', pathMatch: 'full' },
    ]),
  ],
  declarations: [
    AppComponent,
    UserLoginComponent,
    UserComponent
  ],
  bootstrap: [AppComponent],
})
export class AppModule {}
