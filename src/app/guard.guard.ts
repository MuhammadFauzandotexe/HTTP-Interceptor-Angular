import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";


export const guardGuard: CanActivateFn = (route, state) => {
  const router= inject(Router);
  // console.log("AUTH GUARD STATE: ",state)
  // console.log("AUTH GUARD STATE: ",route)
  if(sessionStorage.getItem('token')){
    return true;
  }
  else {
    router.navigateByUrl('/')
    return false}
};
