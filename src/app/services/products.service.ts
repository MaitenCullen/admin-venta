import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  url = 'https://interneg.ddns.net/api-challenge/productos'; 

  async getProduct(page:number, numberProducts: number): Promise<any> {

    const token = localStorage.getItem('access_token');
  
    if (!token) {
      console.error('No se encontró un token en el localStorage.');
      return;
    }
    const requestProducts = {
      method: 'GET',
      headers: {'accept':'*/*',  'Content-Type': 'application/json', 'Authorization':token},
    };

    const urlPagination = `${this.url}?productos?take=${numberProducts}&page=${page}`;
 
    
    return fetch(urlPagination, requestProducts)
      .then(response => response.json())
      .then(data => data)
      .catch(error => {
        console.error('Error', error);
      });
  }

  constructor() { }
}
