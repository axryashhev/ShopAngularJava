package com.example.angular_spring_boot_java.service;

import com.example.angular_spring_boot_java.model.Product;
import com.example.angular_spring_boot_java.repo.ProductRepo;
import org.springframework.stereotype.Service;

@Service
public class ProductService extends RepoService<ProductRepo, Product> {
    public ProductService(ProductRepo repo) {
        super(repo);
    }
}
