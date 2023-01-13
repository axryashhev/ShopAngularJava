package com.example.angular_spring_boot_java.controller;
import com.example.angular_spring_boot_java.model.Stock;
import com.example.angular_spring_boot_java.service.StockService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping("/api/stock")
public class StockController extends BaseController<StockService, Stock> {
@Autowired
public StockController(StockService service) {
super(service);
}
}
