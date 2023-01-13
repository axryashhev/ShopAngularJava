package com.example.angular_spring_boot_java.controller;


import com.example.angular_spring_boot_java.service.RepoService;
import com.fasterxml.jackson.annotation.JsonIgnore;
import org.springframework.http.HttpStatus;
import org.springframework.http.MediaType;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import reactor.core.publisher.Flux;
import reactor.core.publisher.Mono;

public class BaseController<Service extends RepoService<?, Model>,
        Model extends com.example.angular_spring_boot_java.model.Model> {

    protected final Service service;

    public BaseController(Service service) {
        this.service = service;
    }

    @GetMapping(consumes = MediaType.ALL_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public Flux<Model> list(
//            @RequestParam(defaultValue = "0") Long start,
//            @RequestParam(defaultValue = "8") Long count
    ) {
        return service.list();
    }

    @PostMapping(consumes = MediaType.ALL_VALUE, produces = MediaType.APPLICATION_JSON_VALUE)
    public Mono<Model> add(@RequestBody Model model) {
        return service.addOne(model);
    }

    @GetMapping("/{id}")
    public Flux<ResponseEntity<Model>> getById(@PathVariable long id) {
        return service.findById(id)
                .map(ResponseEntity::ok)
                .defaultIfEmpty(ResponseEntity.notFound().build());
    }

    @PutMapping("/{id}")
    public Flux<ResponseEntity<Model>> updateData(@PathVariable long id, @RequestBody Model model) {
        return service.update(id, model)
                .map(ResponseEntity::ok)
                .defaultIfEmpty(ResponseEntity.notFound().build());
    }

    @DeleteMapping("/{id}")
    public Flux<ResponseEntity<Void>> deleteData(@PathVariable Long id) {

        return service.findById(id)
                .flatMap(s -> service.delete(s).then(Mono.just(new ResponseEntity<Void>(HttpStatus.OK))))
                .defaultIfEmpty(new ResponseEntity<>(HttpStatus.NOT_FOUND));
    }

}
