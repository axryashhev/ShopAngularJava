package com.example.angular_spring_boot_java.controller;

import com.example.angular_spring_boot_java.model.Product;
import com.example.angular_spring_boot_java.service.ProductService;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;

@RestController
@RequestMapping("/api/product")
public class ProductController extends BaseController<ProductService, Product> {
    @Autowired
    public ProductController(ProductService service) {
        super(service);
    }
}
