import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot,CanActivateChild,Router,UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './user.service';

@Injectable({providedIn:'root'})
export class AuthGuard implements CanActivate,CanActivateChild {
  
 constructor(private userService:UserService,private router:Router){ }
 isAllowed(url:string){
   let allowed=false;
   if(url.indexOf("/login")>-1|| url.indexOf("/signup")>-1)
   {
     if(!this.userService.isLoggedin()){
       allowed=true;
      }
    }
    else if(url.indexOf("/admin")>-1)
   {
     if(this.userService.isLoggedin() && this.userService.currentUser().role=="Admin"){
       allowed=true;
      }
    }
    else if(url.indexOf("/student")>-1)
   {
     if(this.userService.isLoggedin() && this.userService.currentUser().role=="STUDENT"){
       allowed=true;
      }
    }
    if(!allowed)
    {
      let nextpage:string=null;
       if(!this.userService.isLoggedin()){
       nextpage="/login";
      }
      else if(this.userService.isLoggedin() && this.userService.currentUser().role=="ADMIN"){
      nextpage="/admin";
      }
      else if(this.userService.isLoggedin() && this.userService.currentUser().role=="STUDENT"){
       nextpage="/student";
      }
      let msg="No access to the request resource.please login with proper details.";
     this.router.navigate([nextpage],{queryParams:{ err:msg} })
     }
     
   return allowed;
  }

  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.isAllowed(state.url);
  }
  
  canActivateChild(
    childRoute: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {
      return this.isAllowed(state.url);
  }
  
}
