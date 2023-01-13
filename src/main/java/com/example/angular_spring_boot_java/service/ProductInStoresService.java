package com.example.angular_spring_boot_java.service;

import com.example.angular_spring_boot_java.model.ProductInStores;
import com.example.angular_spring_boot_java.repo.ProductInStoresRepo;
import org.springframework.stereotype.Service;

@Service
public class ProductInStoresService extends RepoService<ProductInStoresRepo, ProductInStores> {
    public ProductInStoresService(ProductInStoresRepo repo) {
        super(repo);
    }
}
