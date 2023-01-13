package com.example.angular_spring_boot_java.service;

import com.example.angular_spring_boot_java.model.StoreInventory;
import com.example.angular_spring_boot_java.repo.StoreInventoryRepo;
import org.springframework.stereotype.Service;

@Service
public class StoreInventoryService extends RepoService<StoreInventoryRepo, StoreInventory> {
    public StoreInventoryService(StoreInventoryRepo repo) {
        super(repo);
    }
}
