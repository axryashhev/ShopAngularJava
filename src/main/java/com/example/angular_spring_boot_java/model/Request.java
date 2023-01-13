package com.example.angular_spring_boot_java.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

import java.time.LocalDate;

@Data
@NoArgsConstructor
@Table("request")
public class Request implements Model {
    @Id
    private Long id;
    private Long id_products_in_requests;
    private LocalDate date_request;

    @Override
    public void setId(long id) {
        this.id = id;
    }

    @Override
    public long getId() {
        return this.id;
    }
}

