import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
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
  public totalPrice: number = 0;
  userForm: FormGroup;
  payload: any;

  constructor(private cartService: ShoppingCartService, private fb: FormBuilder) {
    this.userForm = this.fb.group({
      name: ['Bynx PnM', Validators.required],
      address: this.fb.group({
        houseNumber: ['127', Validators.required],
        street: ['straße', Validators.required],
        zipCode: ['200095', Validators.required],
        place: ['Hamburg', Validators.required],
      }),
      subscriptions: []
    });
  }

  get name() {
    return this.userForm.get('name');
  }

  get houseNumber() {
    return this.userForm.get('address')?.get('houseNumber');
  }
  get street() {
    return this.userForm.get('address')?.get('street');
  }
  get zipCode() {
    return this.userForm.get('address')?.get('zipCode');
  }
  get place() {
    return this.userForm.get('address')?.get('place');
  }

  ngOnInit(): void {
    this.cartService.cart$.subscribe((products) => {
      this.productsInCart = products;
      this.calcTotalPrice();
      return;
    });
    this.payload = {
      products: this.productsInCart,
      user: this.userForm.value,
    };
  }

  calcTotalPrice() {
    this.totalPrice = 0;
    this.productsInCart.forEach((p) => {
      this.totalPrice = this.totalPrice + this.getPriceOfSelectedQuantity(p);
    });
  }

  getStackCount(product: ProductDisplay) {
    return (product as NormalProduct).stock;
  }

  getPriceOfSelectedQuantity(product: ProductDisplay) {
    return product.quantity * Number(product.prices[0]);
  }

  onSubmit() {
    console.log(this.userForm.value);
  }
}
