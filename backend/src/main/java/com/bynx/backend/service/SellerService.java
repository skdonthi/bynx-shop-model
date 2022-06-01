package com.bynx.backend.service;

import com.bynx.backend.model.Product;

public interface SellerService {
    Product[] createProducts(Product[] products);
    void informProductSold(Product product);
    void informProductStackIsEmpty(Product product);
}
