package com.bynx.backend.enumerations;

public enum BuyOption {
    DOWNLOAD_LINK("DOWNLOAD_LINK"),EMAIL("EMAIL");

    private final String buyOption;

    BuyOption(String buyOption) {
        this.buyOption = buyOption;
    }

    public String getBuyOption() {
        return buyOption;
    }
}
