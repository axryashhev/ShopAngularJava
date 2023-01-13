package com.example.angular_spring_boot_java.repo;

import com.example.angular_spring_boot_java.model.ShippedGoods;
import com.example.angular_spring_boot_java.service.Data;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ShippedGoodsRepo extends ReactiveCrudRepository<ShippedGoods, Long>, BaseRepository<ShippedGoods>, Data<ShippedGoods> { }