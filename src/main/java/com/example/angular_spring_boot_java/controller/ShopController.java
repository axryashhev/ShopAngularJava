package com.example.angular_spring_boot_java.controller;
import com.example.angular_spring_boot_java.model.Shop;
import com.example.angular_spring_boot_java.service.ShopService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping("/api/shop")
public class ShopController extends BaseController<ShopService, Shop> {
@Autowired
public ShopController(ShopService service) {
super(service);
}
}
