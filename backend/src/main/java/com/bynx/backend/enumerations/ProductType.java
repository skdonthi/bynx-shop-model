package com.bynx.backend.enumerations;

public enum ProductType {
    NORMAL("NORMAL"),DIGITAL("DIGITAL");

    private final String productType;

    ProductType(String productType) {
        this.productType = productType;
    }

    public String getProductType() {
        return productType;
    }
}

