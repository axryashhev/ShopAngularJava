package com.example.angular_spring_boot_java.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;
import org.springframework.transaction.annotation.Transactional;


@NoArgsConstructor
@Table("address")
@Data
public class Address implements Model {
    @Id
    private Long id;
    private String city;
    private String street;
    private String house;

    @Override
    public void setId(long id) {
        this.id = id;
    }

    @Override
    public long getId() {
        return this.id;
    }
}
