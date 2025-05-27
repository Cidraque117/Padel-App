import { Component } from '@angular/core';
import { Login } from '../../interfaces/login.interface';

@Component({
  standalone: true,
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  public loginData: Login = {
    email: '',
    password: '',
    error: ''
  };

  public login() {
    if (this.loginData.email === 'adming@demo.com' && this.loginData.password === '1234') {
      this.loginData.error = '';
      console.log("Login Correcto");
      //LLAMAR API

    } else {
      this.loginData.error = 'Credenciales inválidas';
    }
  }

}
