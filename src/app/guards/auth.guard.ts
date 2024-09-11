import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable } from 'rxjs';



@Injectable({

  providedIn: 'root'

})

export class AuthGuard implements CanActivate {

  // inject the auth service 

  constructor(private _authService: AuthService, private _router: Router) {

    

  }

  

canActivate(): boolean{

  if(localStorage.getItem('username') != null)

  {

    return true;

  } else {

    this._router.navigate(['./login']);

    return false;

  }

  

}

  

}
