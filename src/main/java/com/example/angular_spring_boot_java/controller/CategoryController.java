package com.example.angular_spring_boot_java.controller;
import com.example.angular_spring_boot_java.model.Category;
import com.example.angular_spring_boot_java.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping("/api/category")
public class CategoryController extends BaseController<CategoryService, Category> {
@Autowired
public CategoryController(CategoryService service) {
super(service);
}
}
