package com.example.angular_spring_boot_java.controller;
import com.example.angular_spring_boot_java.model.Provider;
import com.example.angular_spring_boot_java.service.ProviderService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping("/api/provider")
public class ProviderController extends BaseController<ProviderService, Provider> {
@Autowired
public ProviderController(ProviderService service) {
super(service);
}
}
