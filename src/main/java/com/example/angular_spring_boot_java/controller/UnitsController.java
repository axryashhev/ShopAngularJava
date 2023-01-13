package com.example.angular_spring_boot_java.controller;
import com.example.angular_spring_boot_java.model.Units;
import com.example.angular_spring_boot_java.service.UnitsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping("/api/units")
public class UnitsController extends BaseController<UnitsService, Units> {
@Autowired
public UnitsController(UnitsService service) {
super(service);
}
}
