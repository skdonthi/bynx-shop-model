import { Component } from '@angular/core';
import { DigitalProduct } from './models/DigitalProduct';
import { NormalProduct } from './models/NormalProduct';
import { ShoppingCartService } from './services/shopping-cart.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'bynx-shop-model-frontend';
  public productsInCart: Array<DigitalProduct | NormalProduct> = [];
  constructor(private cartService: ShoppingCartService){
    this.cartService.cart$.subscribe(products => (this.productsInCart = products));
  }
}
