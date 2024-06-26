import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ApiService } from 'src/app/core/service/api.service';

@Injectable({
  providedIn: 'root'
})
export class LoginSignupService {

  public login_url="http://localhost:3000"
  public reg_url="http://localhost:3000"

  constructor(private http:HttpClient,private api:ApiService) { }

  authLogin(user_name,password):Observable<any>
  {
    return this.api.get(this.login_url+'/user?email='+user_name+'&password='+password)
  }

  userRegister(user_dto):Observable<any>
  {
    return this.api.post(this.reg_url+'/user',user_dto)
  }

  admin_Login(user_name,password):Observable<any>
  {
    return this.api.get(this.login_url+'/user?email='+user_name+'&password='+password+'&role=admin')
  }
}
