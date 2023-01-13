package com.example.angular_spring_boot_java.service;

import com.example.angular_spring_boot_java.model.ShippedGoods;
import com.example.angular_spring_boot_java.repo.ShippedGoodsRepo;
import org.springframework.stereotype.Service;

@Service
public class ShippedGoodsService extends RepoService<ShippedGoodsRepo, ShippedGoods> {
    public ShippedGoodsService(ShippedGoodsRepo repo) {
        super(repo);
    }
}
