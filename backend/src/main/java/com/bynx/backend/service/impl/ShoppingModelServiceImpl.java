package com.bynx.backend.service.impl;

import com.bynx.backend.model.Product;
import com.bynx.backend.service.ShoppingModelService;
import org.springframework.stereotype.Service;

@Service
public class ShoppingModelServiceImpl implements ShoppingModelService {


    @Override
    public Product[] addProducts(Product[] products) {
        return new Product[0];

    }

    @Override
    public Product[] removeProducts(Product[] products) {
        return new Product[0];
    }

    @Override
    public Product removeProduct(Long productId) {
        return null;
    }

}
