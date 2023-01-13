package com.example.angular_spring_boot_java.service;

import com.example.angular_spring_boot_java.model.Shop;
import com.example.angular_spring_boot_java.repo.ShopRepo;
import org.springframework.stereotype.Service;

@Service
public class ShopService extends RepoService<ShopRepo, Shop> {
    public ShopService(ShopRepo repo) {
        super(repo);
    }
}
