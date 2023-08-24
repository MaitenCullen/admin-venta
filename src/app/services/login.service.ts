import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  private url = 'https://interneg.ddns.net/api-challenge/login'; 

  async login(username: string, password: string): Promise<void> {
    // const bodyParams =  {username, password}
    const request = {
      method: 'POST',
      headers: {'accept':'*/*',  'Content-Type': 'application/json'},
      body: JSON.stringify({username:username, password:password}),
    };

    return fetch(this.url, request)
      .then(response => response.json())
      .then(data => {
        console.log(data)
        if (data.ATO) {
          localStorage.setItem('access_token', data.ATO);
          console.log('Token almacenado en el localStorage:', data.ATO);
        } else {
          console.error('No se recibió un token ');
        }
      })
      .catch(error => {
        console.error('Error', error);
      });
  }


}
