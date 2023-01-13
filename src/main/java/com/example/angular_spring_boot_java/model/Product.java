package com.example.angular_spring_boot_java.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;
import org.springframework.format.number.money.MonetaryAmountFormatter;

import java.math.BigDecimal;
import java.time.LocalDate;
import java.util.Currency;

@Data
@NoArgsConstructor
@Table("product")
public class Product implements  Model {
    @Id
    private Long id;
    private Long id_category;
    private Long id_units;
    private Long id_trademark;
    private String name;
    private int count;
    private String price;
    private String description;
    private LocalDate date_manufacture;

    private LocalDate date_expiration;
    private String photo;

    @Override
    public void setId(long id) {
        this.id= id;
    }

    @Override
    public long getId() {
        return this.id;
    }
}
