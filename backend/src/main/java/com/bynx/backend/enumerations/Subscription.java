package com.bynx.backend.enumerations;

public enum Subscription {
    PROMOTION("PROMOTION"),OFFER("OFFER"), COUPON("COUPON"),DISCOUNT("DISCOUNT"), WHATS_NEW("WHATS_NEW");

    private final String subscription;

    Subscription(String subscription) {
        this.subscription = subscription;
    }

    public String getSubscription() {
        return subscription;
    }
}
