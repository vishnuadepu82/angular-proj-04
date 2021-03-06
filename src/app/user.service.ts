import { Injectable } from '@angular/core';
import { User } from './user';

@Injectable({ providedIn:'root'})
export class UserService {

  constructor() { }

login(user:User):void
{ 
  localStorage.setItem("user",JSON.stringify(user));
}
logout():void
{ 
  localStorage.clear();
}
isLoggedin():boolean
{ 
  console.log(localStorage.getItem("user"));
return localStorage.getItem("user")?true:false;
}
currentUser():User
{ 
  return JSON.parse(localStorage.getItem("user"));
}
}