package com.example.angular_spring_boot_java.service;

import org.springframework.transaction.annotation.Transactional;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;
public class RepoService<Repo extends Data<Model>,
        Model extends com.example.angular_spring_boot_java.model.Model> {
    protected final Repo repo;

    public RepoService(Repo repo) {
        this.repo = repo;
    }

    public Flux<Model> list() {
        return repo.findAll();
    }
    public Mono<Model> addOne(Model model) {
        return repo.save(model);
    }

    public Flux<Model> findById(long id) {
        return repo.findById(id);
    }

    public Flux<Model> findByName(String name) {
        return repo.findByName(name);
    }

    public Mono<Void> delete(Model model) {
        return repo.delete(model);
    }

    public Flux<Model> update(long id, Model model) {
        return repo.findById(id).flatMap(s -> {
            model.setId(s.getId());
            return repo.save(model);
        });
    }

}
