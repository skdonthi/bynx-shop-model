package com.bynx.backend.service;

import com.bynx.backend.model.Product;

import java.util.Collection;

public interface ProductService {
    Boolean updateProductPrice(Product product);
    int productStackAvailability(Product product);
}
