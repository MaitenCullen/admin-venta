import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DeleteProductService {
  url = 'https://interneg.ddns.net/api-challenge/productos/eliminar'; 

  async deleteProduct(productID: number): Promise<any> {

    const token = localStorage.getItem('access_token');
  
    if (!token) {
      console.error('No se encontró un token en el localStorage.');
      return;
    }
    const deleteOneProduct = {
      method: 'POST',
      headers: {'accept':'*/*',  'Content-Type': 'application/json', 'Authorization':token},
    };

    const DeleteUrl = `${this.url}?id=${productID}`;
 
    
    return fetch(DeleteUrl, deleteOneProduct)
      .then(response => response.json())
      .then(data => data)
      .catch(error => {
        console.error('Error', error);
      });
  }

  constructor() { }
}
