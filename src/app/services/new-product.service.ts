import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewProductService {
  private url = 'https://interneg.ddns.net/api-challenge/productos'; 

  async crearProducto(nuevoProducto: any): Promise<any> {

    const token = localStorage.getItem('access_token');
  
    if (!token) {
      console.error('No se encontró un token en el localStorage.');
      return;
    }
    const crearProducto = {
      method: 'POST',
      headers: {'accept':'*/*',  'Content-Type': 'application/json', 'Authorization':token},
      body: JSON.stringify(nuevoProducto) 
    };

    return fetch(this.url, crearProducto)
      .then(response => response.json())
      .catch(error => {
        console.error('Error', error);
      });
  }
  constructor() { }
}
