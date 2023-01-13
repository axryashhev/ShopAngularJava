package com.example.angular_spring_boot_java.service;

import com.example.angular_spring_boot_java.model.WarehouseInventory;
import com.example.angular_spring_boot_java.repo.WarehouseInventoryRepo;
import org.springframework.stereotype.Service;

@Service
public class WarehouseInventoryService extends RepoService<WarehouseInventoryRepo, WarehouseInventory> {
    public WarehouseInventoryService(WarehouseInventoryRepo repo) {
        super(repo);
    }
}
