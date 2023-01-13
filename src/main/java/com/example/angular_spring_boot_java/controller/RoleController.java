package com.example.angular_spring_boot_java.controller;
import com.example.angular_spring_boot_java.model.Role;
import com.example.angular_spring_boot_java.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping("/api/role")
public class RoleController extends BaseController<RoleService, Role> {
@Autowired
public RoleController(RoleService service) {
super(service);
}
}
