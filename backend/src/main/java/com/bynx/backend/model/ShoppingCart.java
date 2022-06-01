package com.bynx.backend.model;

public class ShoppingCart {
    private Product[] products;
    private double totalPrice;

    public ShoppingCart(Product[] products, double totalPrice) {
        this.products = products;
        this.totalPrice = totalPrice;
    }

    public Product[] getProducts() {
        return products;
    }

    public void setProducts(Product[] products) {
        this.products = products;
    }

    public double getTotalPrice() {
        return totalPrice;
    }

    public void setTotalPrice(double totalPrice) {
        this.totalPrice = totalPrice;
    }
}
