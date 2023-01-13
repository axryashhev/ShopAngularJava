package com.example.angular_spring_boot_java.service;

import com.example.angular_spring_boot_java.model.Address;
import com.example.angular_spring_boot_java.repo.AddressRepo;
import org.springframework.stereotype.Service;


@Service
public class AddressService extends RepoService<AddressRepo, Address> {
    public AddressService(AddressRepo repo) {
        super(repo);
    }
}
