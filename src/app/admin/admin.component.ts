import { Component, OnInit  } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';
import { ProductsService } from '../services/products.service';
import { NewProductService } from '../services/new-product.service';


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
    this.obtener()
  }
   itemProducts:Array<Item> = [];
   nuevoProducto:Item = { id: 0, nombre: '', codigo: '', precio: 0 }
   paginaActual = 1;
   cantidadProductos = 5;
   totalidadPaginas = 0;
   constructor(private productsService: ProductsService, private crearProducto: NewProductService) {};

  obtener(): any {
    this.productsService.obtenerProducto(this.paginaActual, this.cantidadProductos)
      .then((data) => {
       console.log( data, "response")
      this.itemProducts = data.data;
      this.totalidadPaginas = data.pagination.totalPages;
      }); 
  }

    cambioPagina(nuevaPagina:number){
         this.paginaActual = nuevaPagina;
        console.log( "la nueva pagina")
        this.obtener();
        console.log(this.paginaActual, "pagina actual")
    }

    crear(): any {
      this.crearProducto.crearProducto(this.nuevoProducto)
        .then((data) => {
          console.log(data, "response");
          this.nuevoProducto = { id: 0, nombre: '', codigo: '', precio: 0 }; 
          document.getElementById('exampleModal')?.classList.remove('show');
          document.body.classList.remove('modal-open');
        });
    }
    get totalidad(): number[] {
   
      return Array.from({ length: this.totalidadPaginas }, (_, i) => i + 1);

    }
  }

