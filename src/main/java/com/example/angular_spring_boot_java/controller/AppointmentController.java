package com.example.angular_spring_boot_java.controller;
import com.example.angular_spring_boot_java.model.Appointment;
import com.example.angular_spring_boot_java.service.AppointmentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping("/api/appointment")
public class AppointmentController extends BaseController<AppointmentService, Appointment> {
@Autowired
public AppointmentController(AppointmentService service) {
super(service);
}
}
