package com.example.angular_spring_boot_java.controller;
import com.example.angular_spring_boot_java.model.Trademark;
import com.example.angular_spring_boot_java.service.TrademarkService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping("/api/trademark")
public class TrademarkController extends BaseController<TrademarkService, Trademark> {
@Autowired
public TrademarkController(TrademarkService service) {
super(service);
}
}
