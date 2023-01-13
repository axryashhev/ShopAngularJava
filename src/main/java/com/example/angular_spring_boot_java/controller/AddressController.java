package com.example.angular_spring_boot_java.controller;
import com.example.angular_spring_boot_java.model.Address;
import com.example.angular_spring_boot_java.service.AddressService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping("/api/address")
public class AddressController extends BaseController<AddressService, Address> {
@Autowired
public AddressController(AddressService service) {
super(service);
}
}
