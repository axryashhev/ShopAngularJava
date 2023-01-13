package com.example.angular_spring_boot_java.repo;

import com.example.angular_spring_boot_java.model.ProductsInRequests;
import com.example.angular_spring_boot_java.service.Data;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProductsInRequestsRepo extends ReactiveCrudRepository<ProductsInRequests, Long>, BaseRepository<ProductsInRequests>, Data<ProductsInRequests> { }
