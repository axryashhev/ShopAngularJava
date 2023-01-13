package com.example.angular_spring_boot_java.service;

import com.example.angular_spring_boot_java.model.Units;
import com.example.angular_spring_boot_java.repo.UnitsRepo;
import org.springframework.stereotype.Service;

@Service
public class UnitsService extends RepoService<UnitsRepo, Units> {
    public UnitsService(UnitsRepo repo) {
        super(repo);
    }
}
