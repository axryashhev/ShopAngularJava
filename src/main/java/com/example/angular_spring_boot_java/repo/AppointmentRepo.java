package com.example.angular_spring_boot_java.repo;

import com.example.angular_spring_boot_java.model.Appointment;
import com.example.angular_spring_boot_java.service.Data;
import org.springframework.data.repository.reactive.ReactiveCrudRepository;
import org.springframework.stereotype.Repository;

@Repository
public interface AppointmentRepo extends ReactiveCrudRepository<Appointment, Long>, BaseRepository<Appointment>, Data<Appointment> { }