import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private url = 'https://interneg.ddns.net/api-challenge/productos'; 

  async obtenerProducto(pagina:number, cantidadProductos: number): Promise<any> {

    const token = localStorage.getItem('access_token');
  
    if (!token) {
      console.error('No se encontró un token en el localStorage.');
      return;
    }
    const requestProducts = {
      method: 'GET',
      headers: {'accept':'*/*',  'Content-Type': 'application/json', 'Authorization':token},
    };

    const urlWithPagination = `${this.url}?productos?take=${cantidadProductos}&page=${pagina}`;

    return fetch(urlWithPagination, requestProducts)
      .then(response => response.json())
      .then(data => data)
      .catch(error => {
        console.error('Error', error);
      });
  }

  constructor() { }
}
