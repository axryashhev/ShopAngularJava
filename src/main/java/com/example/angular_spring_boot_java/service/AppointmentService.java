package com.example.angular_spring_boot_java.service;

import com.example.angular_spring_boot_java.model.Appointment;
import com.example.angular_spring_boot_java.repo.AppointmentRepo;
import org.springframework.stereotype.Service;

@Service
public class AppointmentService extends RepoService<AppointmentRepo, Appointment> {
    public AppointmentService(AppointmentRepo repo) {
        super(repo);
    }
}
