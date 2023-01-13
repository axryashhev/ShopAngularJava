package com.example.angular_spring_boot_java.service;

import com.example.angular_spring_boot_java.model.Password;
import com.example.angular_spring_boot_java.repo.PasswordRepo;
import org.springframework.stereotype.Service;

@Service
public class PasswordService extends RepoService<PasswordRepo, Password> {
    public PasswordService(PasswordRepo repo) {
        super(repo);
    }
}
