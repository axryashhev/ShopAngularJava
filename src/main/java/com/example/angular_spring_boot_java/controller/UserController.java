package com.example.angular_spring_boot_java.controller;
import com.example.angular_spring_boot_java.model.User;
import com.example.angular_spring_boot_java.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping("/api/app_user")
public class UserController extends BaseController<UserService, User> {
@Autowired
public UserController(UserService service) {
super(service);
}
}
