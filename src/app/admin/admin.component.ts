import { Component } from '@angular/core';
import { NgbModal, NgbModalRef } from '@ng-bootstrap/ng-bootstrap';

class Item {
  constructor(public id: number, public name: string) {}
}

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  items: Item[] = [
    new Item(1, 'Item 1'),
    new Item(2, 'Item 2'),
    // ... otros elementos
  ];

  currentPage = 1;
  itemsPerPage = 10;
  searchText = '';

  modalRef: NgbModalRef | undefined;

  constructor(private modalService: NgbModal) {}

  openModal(template: any, data?: any) {
    this.modalRef = this.modalService.open(template);
    if (data) {
      this.modalRef.componentInstance.data = data;
    }
  }

  filterItems() {
    // Implementa la lógica de filtrado según el valor de this.searchText
  }

  get pagedItems() {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    return this.items.slice(startIndex, endIndex);
  }

  // ... otras propiedades y métodos
}
