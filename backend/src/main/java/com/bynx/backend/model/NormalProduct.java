package com.bynx.backend.model;

import com.bynx.backend.enumerations.ProductType;

public class NormalProduct extends Product{
    private int stock;

    public NormalProduct(String name, String articleNumber, double[] prices, String[] imageUrls, ProductType type, int stock) {
        super(name, articleNumber, prices, imageUrls, type);
        this.stock = stock;
    }

    public int getStock() {
        return stock;
    }

    public void setStock(int stock) {
        this.stock = stock;
    }
}
