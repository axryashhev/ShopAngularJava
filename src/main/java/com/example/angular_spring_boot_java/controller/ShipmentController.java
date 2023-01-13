package com.example.angular_spring_boot_java.controller;
import com.example.angular_spring_boot_java.model.Shipment;
import com.example.angular_spring_boot_java.service.ShipmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping("/api/shipment")
public class ShipmentController extends BaseController<ShipmentService, Shipment> {
@Autowired
public ShipmentController(ShipmentService service) {
super(service);
}
}
