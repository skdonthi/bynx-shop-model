package com.bynx.backend.service.impl;

import com.bynx.backend.model.Product;
import com.bynx.backend.service.SellerService;

public class SellerServiceImpl implements SellerService {
    @Override
    public Product[] createProducts(Product[] products) {
        return new Product[0];
    }

    @Override
    public void informProductSold(Product product) {

    }

    @Override
    public void informProductStackIsEmpty(Product product) {

    }
}
