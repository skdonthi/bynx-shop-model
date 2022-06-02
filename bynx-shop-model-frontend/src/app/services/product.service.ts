import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { catchError, map, Observable } from 'rxjs';
import { DigitalProduct } from '../models/DigitalProduct';
import { NormalProduct } from '../models/NormalProduct';
import { Response } from '../models/Response';

@Injectable({
  providedIn: 'root',
})
export class ProductService {
  constructor(private http: HttpClient) {}

  public getProducts(): Observable<Array<DigitalProduct | NormalProduct>> {
    return this.http
      .get<Response<Array<DigitalProduct | NormalProduct>>>(
        'assets/mock-data/products.json'
      )
      .pipe(map((response) => response.data.products));
  }

  private handleError(handleError: any): unknown {
    throw new Error('Method not implemented.');
  }
}
