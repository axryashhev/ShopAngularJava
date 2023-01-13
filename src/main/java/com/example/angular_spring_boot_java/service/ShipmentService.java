package com.example.angular_spring_boot_java.service;

import com.example.angular_spring_boot_java.model.Shipment;
import com.example.angular_spring_boot_java.repo.ShipmentRepo;
import org.springframework.stereotype.Service;

@Service
public class ShipmentService extends RepoService<ShipmentRepo, Shipment> {
    public ShipmentService(ShipmentRepo repo) {
        super(repo);
    }
}
