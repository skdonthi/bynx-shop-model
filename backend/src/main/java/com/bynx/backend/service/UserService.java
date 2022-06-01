package com.bynx.backend.service;

import com.bynx.backend.model.Product;
import com.bynx.backend.model.User;
import com.bynx.backend.model.Wrapper;

public interface UserService {
    Wrapper informCustomerAboutPriceChange(User user);
    Wrapper buyProducts(Product[] products);
}
