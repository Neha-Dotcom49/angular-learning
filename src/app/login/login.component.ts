import { Component, OnInit } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  // inject the AuthServic
  constructor(private _authService: AuthService, private router: Router) {}
  

  ngOnInit(): void {
  }
  checkuser(uname: string, pwd: string) {
   var outPut = this._authService.checkUserNameAndPassword(uname, pwd);
   if (outPut == true) {
    alert('Login successfully');
    this.router.navigate(['/home']);
   } else {
    alert('Invalid username and password')
  }
}

}
