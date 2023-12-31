import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NewProductService {
   url = 'https://interneg.ddns.net/api-challenge/productos'; 

  async createProduct(newProduct: any): Promise<any> {

    const token = localStorage.getItem('access_token');
  
    if (!token) {
      console.error('No se encontró un token en el localStorage.');
      return;
    }
    const createProduct = {
      method: 'POST',
      headers: {'accept':'*/*',  'Content-Type': 'application/json', 'Authorization':token},
      body: JSON.stringify(newProduct) 
    };

    return fetch(this.url, createProduct)
      .then(response => response.json())
      .catch(error => {
        console.error('Error', error);
      });
  }
  constructor() { }
}
