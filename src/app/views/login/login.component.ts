import { Component } from '@angular/core';
import { Login } from '../../interfaces/login.interface';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(public service: AuthService) { }

  public loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl('')
  });

  public errorMessage: string = '';

  public onSubmit(): void {
    this.errorMessage = '';

    if (this.loginForm.invalid) {
      this.errorMessage = 'Completa todos los campos correctamente.';
      return;
    }

    console.log("FORM: ", this.loginForm.value);


    this.service.login(this.loginForm.value).subscribe({
      next: (response) => {
        console.log('Respuesta del servidor:', response);
        // TOKEN Y REDIRIGIR
      },
      error: (err) => {
        console.error('Error en login:', err);
        this.errorMessage = 'Credenciales incorrectas o error del servidor';
      }
    });
  }
}
