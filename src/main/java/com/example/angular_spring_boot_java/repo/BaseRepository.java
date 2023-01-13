package com.example.angular_spring_boot_java.repo;

import reactor.core.publisher.Flux;

public interface BaseRepository<T> {
    default Flux<T> findByName(String name) {
        throw new UnsupportedOperationException("Not supported yet.");
    }

    Flux<T> findById(long id);
}
