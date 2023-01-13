package com.example.angular_spring_boot_java.repo;

import com.example.angular_spring_boot_java.model.Provider;
import com.example.angular_spring_boot_java.service.Data;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface ProviderRepo extends ReactiveCrudRepository<Provider, Long>, BaseRepository<Provider>, Data<Provider> { }