package com.example.angular_spring_boot_java.controller;
import com.example.angular_spring_boot_java.model.StoreInventory;
import com.example.angular_spring_boot_java.service.StoreInventoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping("/api/store_inventory")
public class StoreInventoryController extends BaseController<StoreInventoryService, StoreInventory> {
@Autowired
public StoreInventoryController(StoreInventoryService service) {
super(service);
}
}
