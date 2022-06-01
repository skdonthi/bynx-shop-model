package com.bynx.backend.service;

import com.bynx.backend.model.Product;

import java.util.Collection;

public interface ShoppingModelService {

    Product[] addProducts(Product[] products);
    Product[] removeProducts(Product[] products);
    Product removeProduct(Long productId);


}
