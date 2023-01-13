package com.example.angular_spring_boot_java.repo;

import com.example.angular_spring_boot_java.model.WarehouseInventory;
import com.example.angular_spring_boot_java.service.Data;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface WarehouseInventoryRepo extends ReactiveCrudRepository<WarehouseInventory, Long>, BaseRepository<WarehouseInventory>, Data<WarehouseInventory> { }