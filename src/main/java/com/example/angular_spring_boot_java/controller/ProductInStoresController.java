package com.example.angular_spring_boot_java.controller;
import com.example.angular_spring_boot_java.model.ProductInStores;
import com.example.angular_spring_boot_java.service.ProductInStoresService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping("/api/products_in_stores")
public class ProductInStoresController extends BaseController<ProductInStoresService, ProductInStores> {
@Autowired
public ProductInStoresController(ProductInStoresService service) {
super(service);
}
}
