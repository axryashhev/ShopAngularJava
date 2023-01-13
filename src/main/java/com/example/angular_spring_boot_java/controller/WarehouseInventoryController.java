package com.example.angular_spring_boot_java.controller;
import com.example.angular_spring_boot_java.model.WarehouseInventory;
import com.example.angular_spring_boot_java.service.WarehouseInventoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping("/api/warehouse_inventory")
public class WarehouseInventoryController extends BaseController<WarehouseInventoryService, WarehouseInventory> {
@Autowired
public WarehouseInventoryController(WarehouseInventoryService service) {
super(service);
}
}
