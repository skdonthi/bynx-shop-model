package com.bynx.backend.model;

import com.bynx.backend.enumerations.BuyOption;
import com.bynx.backend.enumerations.ProductType;

public class DigitalProduct extends Product{
    private String imageUrl;
    private BuyOption buyingOption;

    public DigitalProduct(String name, String articleNumber, double[] prices, String[] imageUrls, ProductType type) {
        super(name, articleNumber, prices, imageUrls, type);
    }

    public String getImageUrl() {
        return imageUrl;
    }

    public void setImageUrl(String imageUrl) {
        this.imageUrl = imageUrl;
    }

}
