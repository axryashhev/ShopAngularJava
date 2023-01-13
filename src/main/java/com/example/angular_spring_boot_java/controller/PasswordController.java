package com.example.angular_spring_boot_java.controller;
import com.example.angular_spring_boot_java.model.Password;
import com.example.angular_spring_boot_java.service.PasswordService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping("/api/password_data")
public class PasswordController extends BaseController<PasswordService, Password> {
@Autowired
public PasswordController(PasswordService service) {
super(service);
}
}
