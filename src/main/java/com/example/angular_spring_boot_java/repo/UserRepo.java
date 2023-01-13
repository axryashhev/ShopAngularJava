package com.example.angular_spring_boot_java.repo;

import com.example.angular_spring_boot_java.model.User;
import com.example.angular_spring_boot_java.service.Data;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import org.springframework.stereotype.Repository;
import reactor.core.publisher.Mono;

@Repository
public interface UserRepo extends ReactiveCrudRepository<User, Long>, BaseRepository<User>, Data<User> {
//    Mono<User> findByUsername(String name);
}