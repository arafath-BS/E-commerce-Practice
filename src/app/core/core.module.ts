import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ApiComponent } from './service/api/api.component';
import { HttpComponent } from './interceptors/http/http.component';



@NgModule({
  declarations: [
    ApiComponent,
    HttpComponent
  ],
  imports: [
    CommonModule
  ]
})
export class CoreModule { }
