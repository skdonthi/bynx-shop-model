package com.bynx.backend.model;

import com.bynx.backend.enumerations.ProductType;
import lombok.NonNull;

public class Product {
    private String name;
    private String articleNumber;
    private double[] prices;
    private String[] imageUrls;
    private ProductType type;
    private Category category;

    public Product(String name, String articleNumber, double[] prices, String[] imageUrls, ProductType type) {
        this.name = name;
        this.articleNumber = articleNumber;
        this.prices = prices;
        this.imageUrls = imageUrls;
        this.type = type;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getArticleNumber() {
        return articleNumber;
    }

    public void setArticleNumber(String articleNumber) {
        this.articleNumber = articleNumber;
    }

    public double[] getPrices() {
        return prices;
    }

    public void setPrices(double[] prices) {
        this.prices = prices;
    }

    public String[] getImageUrls() {
        return imageUrls;
    }

    public void setImageUrls(String[] imageUrls) {
        this.imageUrls = imageUrls;
    }

    public ProductType getType() {
        return type;
    }

    public void setType(ProductType type) {
        this.type = type;
    }
}
