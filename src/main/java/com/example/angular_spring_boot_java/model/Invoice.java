package com.example.angular_spring_boot_java.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@Table("invoice")
public class Invoice implements Model {
    @Id
    private Long id;
    private Long id_appointment;
    private Long id_confirmation_note;
    private Long id_provider;
    private String price;
    private boolean accounted;

    @Override
    public void setId(long id) {
        this.id = id;
    }

    @Override
    public long getId() {
        return this.id;
    }
}
