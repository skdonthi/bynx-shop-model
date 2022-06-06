import { Component, OnInit } from '@angular/core';
import { DigitalProduct } from 'src/app/models/DigitalProduct';
import { NormalProduct } from 'src/app/models/NormalProduct';
import { ProductService } from 'src/app/services/product.service';
import { ShoppingCartService } from 'src/app/services/shopping-cart.service';
import { ToastService } from 'src/app/services/toast.service';
import { ProductDisplay } from '../../models/ProductDisplay';

@Component({
  selector: 'app-product-view',
  templateUrl: './product-view.component.html',
  styleUrls: ['./product-view.component.scss'],
})
export class ProductViewComponent implements OnInit {
  constructor(
    private toastService: ToastService,
    private productService: ProductService,
    private cartService: ShoppingCartService
  ) {
    this.cartService.cart$.subscribe(
      (products) => (this.productsAddedTocart = products)
    );
  }

  public allProducts: ProductDisplay[] = [];
  private productsAddedTocart: ProductDisplay[] = [];

  ngOnInit(): void {
    this.productService
      .getProducts()
      .subscribe((response: Array<DigitalProduct | NormalProduct>) => {
        this.allProducts = response.map((p) => {
          const pid = this.productsAddedTocart.find(product => product.articleNumber === p.articleNumber);
          if(pid) {
            pid.isAddedTocart = true;
            p = {...p, ...pid };
          }
          return p as ProductDisplay;
        });
      });
  }

  addToCart(product: ProductDisplay) {
    const idx = this.allProducts.findIndex(p => p.articleNumber === product.articleNumber);
    this.allProducts[idx].isAddedTocart = true;
    this.toastService.showSuccess(`${product.name} is added to the cart`);
    this.cartService.shoppingCart$.next([...this.productsAddedTocart, product]);
  }

  removeFromCart(product: ProductDisplay) {
    const idx = this.allProducts.findIndex(p => p.articleNumber === product.articleNumber);
    this.allProducts[idx].isAddedTocart = false;
    this.toastService.showSuccess(`${product.name} is removed to the cart`);
    this.productsAddedTocart = this.productsAddedTocart.filter(p => p.articleNumber !== product.articleNumber);
    this.cartService.shoppingCart$.next([...this.productsAddedTocart]);
  }

  getStackCount(product: ProductDisplay) {
    return (product as NormalProduct).stock;
  }

  checkBuyOption(product: ProductDisplay, option: string) {
    return (product as DigitalProduct).buyOption=== option;
  }
}


