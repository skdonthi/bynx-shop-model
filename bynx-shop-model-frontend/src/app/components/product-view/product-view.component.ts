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

  public digitalProducts: ProductDisplay[] = [];
  public normalProducts: ProductDisplay[] = [];
  private productsAddedTocart: ProductDisplay[] = [];

  ngOnInit(): void {
    this.productService
      .getProducts()
      .subscribe((response: Array<DigitalProduct | NormalProduct>) => {
        response.forEach((p) => {
          const pid = this.productsAddedTocart.find(product => product.articleNumber === p.articleNumber);
          const pdt = {...p, ...pid } as ProductDisplay;
          if (pdt.type === 'DIGITAL') {
            this.digitalProducts.push(pdt);
          } else {
            this.normalProducts.push(pdt);
          }
        });
      });
  }

  addToCart(product: ProductDisplay) {
    this.toastService.showSuccess(`${product.name} is added to the cart`);
    this.cartService.shoppingCart$.next([...this.productsAddedTocart, product]);
  }

  addNormalProductToCart(product: ProductDisplay) {
    const idx = this.normalProducts.findIndex(p => p.articleNumber === product.articleNumber);
    this.normalProducts[idx].isAddedTocart = true;
    this.addToCart(product);
  }


  addDigitalProductToCart(product: ProductDisplay) {
    const idx = this.digitalProducts.findIndex(p => p.articleNumber === product.articleNumber);
    this.digitalProducts[idx].isAddedTocart = true;
    this.addToCart(product);
  }

  getStackCount(product: ProductDisplay) {
    return (product as NormalProduct).stock;
  }

  checkBuyOption(product: ProductDisplay, option: string) {
    return (product as DigitalProduct).buyOption=== option;
  }
}


