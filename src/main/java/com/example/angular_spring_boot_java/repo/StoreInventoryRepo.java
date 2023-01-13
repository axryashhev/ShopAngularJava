package com.example.angular_spring_boot_java.repo;

import com.example.angular_spring_boot_java.model.StoreInventory;
import com.example.angular_spring_boot_java.service.Data;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StoreInventoryRepo extends ReactiveCrudRepository<StoreInventory, Long>, BaseRepository<StoreInventory>, Data<StoreInventory> { }