import { Component, OnInit } from '@angular/core';
import { NormalProduct } from 'src/app/models/NormalProduct';
import { ProductDisplay } from 'src/app/models/ProductDisplay';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.scss'],
})
export class ShoppingCartComponent implements OnInit {

  public productsInCart: ProductDisplay[] = [];
  constructor(private cartService: ShoppingCartService) {}

  ngOnInit(): void {
    this.cartService.cart$.subscribe(products => (this.productsInCart = products));
  }

  getStackCount(product: ProductDisplay) {
    return (product as NormalProduct).stock;
  }
}
