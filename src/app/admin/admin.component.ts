import { Component, OnInit  } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ProductsService } from '../services/products.service';
import { NewProductService } from '../services/new-product.service';
import { DeleteProductService } from '../services/delete-product.service';


interface Item {
  id: number,
  nombre: string,
  codigo:string,
  precio:number
}


@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})

export class AdminComponent implements OnInit {
  ngOnInit(): void {
    this.getProducts()
  }

   itemProducts:Array<Item> = [];
   newProduct:Item = { id: 0, nombre: '', codigo: '', precio: 0 }
   currentPage = 1;
   numberProducts = 5;
   allPages = 0;
   productID = 0;

   constructor(private productsService: ProductsService, private createProduct: NewProductService, private deleteProduct: DeleteProductService) {};

  getProducts(): any {
    this.productsService.getProduct(this.currentPage, this.numberProducts)
      .then((data) => {
       console.log( data, "response")
      this.itemProducts = data.data;
      this.allPages = data.pagination.totalPages;
      }); 
  }

    changePage(newPage:number){
         this.currentPage = newPage;
        console.log( "la nueva pagina")
        this.getProducts();
        console.log(this.currentPage, "pagina actual")
    }

    create(): any {
      this.createProduct.createProduct(this.newProduct)
        .then((data) => {
          console.log(data, "response");
          this.newProduct = { id: 0, nombre:'', codigo: '', precio: 0 }; 
          document.getElementById('exampleModal')?.classList.remove('show');
          document.body.classList.remove('modal-open');
        });
    }
    get totality(): number[] {
   
      return Array.from({ length: this.allPages }, (_, i) => i + 1);

    }
    delete(selectedProductID:number):any{
      this.productID = selectedProductID;
      this.deleteProduct.deleteProduct(this.productID)
      .then((data) => {
        console.log( data, "eliminar")
       this.productID = data.id;
       this.getProducts()
       }); 
    }
  }

