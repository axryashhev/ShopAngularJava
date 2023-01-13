package com.example.angular_spring_boot_java.repo;

import com.example.angular_spring_boot_java.model.Stock;
import com.example.angular_spring_boot_java.service.Data;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface StockRepo extends ReactiveCrudRepository<Stock, Long>, BaseRepository<Stock>, Data<Stock> { }