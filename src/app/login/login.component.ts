import { Component } from '@angular/core';
import { LoginService } from '../services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = ''; 
  password: string = ''; 
  constructor(private loginService: LoginService) {}

  onSubmit(): void {
    this.loginService.login(this.username, this.password)
      .then(() => {
       console.log(this.username, this.password, "los datos")
      });
  }
}
