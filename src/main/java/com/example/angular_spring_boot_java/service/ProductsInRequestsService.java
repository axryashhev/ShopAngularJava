package com.example.angular_spring_boot_java.service;

import com.example.angular_spring_boot_java.model.ProductsInRequests;
import com.example.angular_spring_boot_java.repo.ProductsInRequestsRepo;
import org.springframework.stereotype.Service;

@Service
public class ProductsInRequestsService extends RepoService<ProductsInRequestsRepo, ProductsInRequests> {
    public ProductsInRequestsService(ProductsInRequestsRepo repo) {
        super(repo);
    }
}
