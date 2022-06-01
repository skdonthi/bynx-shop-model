package com.bynx.backend.model;

public class Category {
    private String name;
    private Product[] products;
    private Category categories;

    public Category(String name, Product[] products, Category categories) {
        this.name = name;
        this.products = products;
        this.categories = categories;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Product[] getProducts() {
        return products;
    }

    public void setProducts(Product[] products) {
        this.products = products;
    }

    public Category getCategories() {
        return categories;
    }

    public void setCategories(Category categories) {
        this.categories = categories;
    }
}
