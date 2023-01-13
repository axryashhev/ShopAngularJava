package com.example.angular_spring_boot_java.service;

import com.example.angular_spring_boot_java.model.Role;
import com.example.angular_spring_boot_java.repo.RoleRepo;
import org.springframework.stereotype.Service;

@Service
public class RoleService extends RepoService<RoleRepo, Role> {
    public RoleService(RoleRepo repo) {
        super(repo);
    }
}
