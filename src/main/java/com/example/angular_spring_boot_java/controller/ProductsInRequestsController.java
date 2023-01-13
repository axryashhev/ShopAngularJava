package com.example.angular_spring_boot_java.controller;
import com.example.angular_spring_boot_java.model.ProductsInRequests;
import com.example.angular_spring_boot_java.service.ProductsInRequestsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping("/api/products_in_requests")
public class ProductsInRequestsController extends BaseController<ProductsInRequestsService, ProductsInRequests> {
@Autowired
public ProductsInRequestsController(ProductsInRequestsService service) {
super(service);
}
}
