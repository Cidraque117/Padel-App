import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';


@Component({
  selector: 'app-login',
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

  constructor(public service: AuthService, public router: Router) { }

  public loginForm: FormGroup = new FormGroup({
    email: new FormControl(''),
    password: new FormControl(''),
    checkbox: new FormControl(false)
  });
  public errorMessage: string = '';

  public onSubmit(): void {
    this.errorMessage = '';

    if (this.loginForm.invalid) {
      this.errorMessage = 'Debes rellenar todos los campos';
      return;
    }

    console.log('FORM: ', this.loginForm.value);

    const remember: boolean = this.loginForm.get('checkbox')?.value;

    this.service.login(this.loginForm.value).subscribe({
      next: (response) => {
        console.log('Respuesta del servidor:', response);

        const token = response;
        if (remember) {
          sessionStorage.setItem('padel_token', token);
          //GUARDAR REFRESH TOKEN, COOKIE HTTPONLY?
        } else {
          sessionStorage.setItem('padel_token', token);
        }

        this.router.navigateByUrl('/home');
      },
      error: (err) => {
        console.error('Error en login:', err);
        this.errorMessage = 'Credenciales incorrectas o error del servidor';
      }
    });
  }
}
