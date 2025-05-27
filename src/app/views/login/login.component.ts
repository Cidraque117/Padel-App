import { Component } from '@angular/core';
import { Login } from '../../interfaces/login.interface';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(public service: AuthService) { }

  public loginData: Login = {
    email: '',
    password: '',
    error: ''
  };

  public login(): void {
    this.loginData.error = ''; // LIMPIAR ERRORES, PREVIOS

    this.service.login(this.loginData).subscribe({
      next: (response) => {
        console.log('Respuesta del servidor: ', response);
        // GUARDAR TOKEN/ REDIRIGIR
      },
      error: (err) => {
        console.error('Error del servidor: ', err);
        this.loginData.error = 'Credenciales incorrectas o error del servidor';
      }
    });
  }


}
