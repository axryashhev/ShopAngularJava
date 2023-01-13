package com.example.angular_spring_boot_java.controller;
import com.example.angular_spring_boot_java.model.ShippedGoods;
import com.example.angular_spring_boot_java.service.ShippedGoodsService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping("/api/shipped_goods")
public class ShippedGoodsController extends BaseController<ShippedGoodsService, ShippedGoods> {
@Autowired
public ShippedGoodsController(ShippedGoodsService service) {
super(service);
}
}
