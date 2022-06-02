import { Injectable } from '@angular/core';
import { of } from 'rxjs';
import { BehaviorSubject } from 'rxjs/internal/BehaviorSubject';
import { ProductDisplay } from '../models/ProductDisplay';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {
  public shoppingCart$ = new BehaviorSubject<ProductDisplay[]>([]);
  public cart$ = this.shoppingCart$.asObservable();

  constructor() { }

  public buyCart() {
    return of();
  }

}
