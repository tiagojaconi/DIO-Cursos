import { Component, OnInit } from '@angular/core';

import { Book } from './model/book';
import { ProductListService } from './product-list.service';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
})

export class ProductListComponent implements OnInit {
  livros: Array<Book> = [];

  constructor(private productListService: ProductListService) { }

  ngOnInit(): void {
    this.productListService.getBook().subscribe(data => {
      this.livros = data;
    })
  }

}
