package com.example.angular_spring_boot_java.service;

import com.example.angular_spring_boot_java.model.Stock;
import com.example.angular_spring_boot_java.repo.StockRepo;
import org.springframework.stereotype.Service;

@Service
public class StockService extends RepoService<StockRepo, Stock> {
    public StockService(StockRepo repo) {
        super(repo);
    }
}
