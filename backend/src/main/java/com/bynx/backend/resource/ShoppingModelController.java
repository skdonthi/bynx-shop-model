package com.bynx.backend.resource;

import com.bynx.backend.model.Product;
import com.bynx.backend.model.ShoppingCart;
import com.bynx.backend.model.Wrapper;
import com.bynx.backend.service.impl.ShoppingModelServiceImpl;
import lombok.RequiredArgsConstructor;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.validation.Valid;
import java.util.Map;

import static java.time.LocalDateTime.now;
import static org.springframework.http.HttpStatus.CREATED;
import static org.springframework.http.HttpStatus.OK;

@RestController
@RequestMapping("/shopping/cart")
@RequiredArgsConstructor
public class ShoppingModelController {
    private final ShoppingModelServiceImpl service;
    @PostMapping("/add")
    public ResponseEntity<Wrapper> addProduct(@RequestBody @Valid Product[] products) {
        return ResponseEntity.ok(
                Wrapper.builder()
                        .timestamp(now())
                        .data(Map.of("products", service.addProducts(products)))
                        .message("products added")
                        .status(CREATED)
                        .statusCode(CREATED.value())
                        .build()
        );
    }

    @DeleteMapping("/remove")
    public ResponseEntity<Wrapper> removeProducts(@RequestBody @Valid Product[] products) {
        return ResponseEntity.ok(
                Wrapper.builder()
                        .timestamp(now())
                        .data(Map.of("products", service.removeProducts(products)))
                        .message("products removed")
                        .status(OK)
                        .statusCode(OK.value())
                        .build()
        );
    }

    @DeleteMapping("/product/{id}")
    public ResponseEntity<Wrapper> removeProductById(@PathVariable("id") Long id) {
        return ResponseEntity.ok(
                Wrapper.builder()
                        .timestamp(now())
                        .data(Map.of("products", service.removeProduct(id)))
                        .message("product removed")
                        .status(OK)
                        .statusCode(OK.value())
                        .build()
        );
    }
}
