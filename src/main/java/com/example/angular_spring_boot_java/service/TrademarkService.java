package com.example.angular_spring_boot_java.service;

import com.example.angular_spring_boot_java.model.Trademark;
import com.example.angular_spring_boot_java.repo.TrademarkRepo;
import org.springframework.stereotype.Service;

@Service
public class TrademarkService extends RepoService<TrademarkRepo, Trademark> {
    public TrademarkService(TrademarkRepo repo) {
        super(repo);
    }
}
