package com.example.angular_spring_boot_java.service;

import com.example.angular_spring_boot_java.repo.BaseRepository;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;

public interface Data<Model> extends ReactiveCrudRepository<Model, Long>, BaseRepository<Model> {
}
