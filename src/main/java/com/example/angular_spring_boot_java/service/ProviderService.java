package com.example.angular_spring_boot_java.service;

import com.example.angular_spring_boot_java.model.Provider;
import com.example.angular_spring_boot_java.repo.ProviderRepo;
import org.springframework.stereotype.Service;

@Service
public class ProviderService extends RepoService<ProviderRepo, Provider> {
    public ProviderService(ProviderRepo repo) {
        super(repo);
    }
}
