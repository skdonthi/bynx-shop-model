package com.bynx.backend.model;

import com.bynx.backend.enumerations.Subscription;

public class User {
    private String name;
    private Address address;
    private Subscription[] subscriptions;

    public User(String name, Address address, Subscription[] subscriptions) {
        this.name = name;
        this.address = address;
        this.subscriptions = subscriptions;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public Address getAddress() {
        return address;
    }

    public void setAddress(Address address) {
        this.address = address;
    }

    public Subscription[] getSubscriptions() {
        return subscriptions;
    }

    public void setSubscriptions(Subscription[] subscriptions) {
        this.subscriptions = subscriptions;
    }
}
