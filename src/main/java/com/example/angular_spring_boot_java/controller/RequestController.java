package com.example.angular_spring_boot_java.controller;
import com.example.angular_spring_boot_java.model.Request;
import com.example.angular_spring_boot_java.service.RequestService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping("/api/request")
public class RequestController extends BaseController<RequestService, Request> {
@Autowired
public RequestController(RequestService service) {
super(service);
}
}
