import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { UserCrudComponent } from './user-crud/user-crud.component';



@NgModule({
  declarations: [
    AdminDashboardComponent,
    AdminLoginComponent,
    UserCrudComponent
  ],
  imports: [
    CommonModule
  ]
})
export class AdminModule { }
