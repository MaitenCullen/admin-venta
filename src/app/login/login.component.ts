import { Component } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  username: string = '';
  password: string = '';

  onSubmit() {
    // Aquí realizarías la llamada AJAX utilizando el servicio HttpClient
    // para enviar el username y password a tu API y obtener el token de acceso.
    // Luego guardarías el token en el local storage.

    // Ejemplo de cómo podrías guardar el token en el local storage:
    const token = 'your_generated_token';
    localStorage.setItem('access_token', token);
  }
}
