package com.example.angular_spring_boot_java.service;

import com.example.angular_spring_boot_java.model.Request;
import com.example.angular_spring_boot_java.repo.RequestRepo;
import org.springframework.stereotype.Service;

@Service
public class RequestService extends RepoService<RequestRepo, Request> {
    public RequestService(RequestRepo repo) {
        super(repo);
    }
}
