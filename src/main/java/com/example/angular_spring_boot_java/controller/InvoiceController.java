package com.example.angular_spring_boot_java.controller;

import com.example.angular_spring_boot_java.model.Invoice;
import com.example.angular_spring_boot_java.service.InvoiceService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
@RestController
@RequestMapping("/api/invoice")
public class InvoiceController extends BaseController<InvoiceService, Invoice> {
    @Autowired
    public InvoiceController(InvoiceService service) {
        super(service);
    }
}