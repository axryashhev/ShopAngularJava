package com.example.angular_spring_boot_java.service;

import com.example.angular_spring_boot_java.model.Category;
import com.example.angular_spring_boot_java.repo.CategoryRepo;
import org.springframework.stereotype.Service;

@Service
public class CategoryService extends RepoService<CategoryRepo, Category> {
    public CategoryService(CategoryRepo repo) {
        super(repo);
    }
}
