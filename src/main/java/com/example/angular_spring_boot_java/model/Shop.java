package com.example.angular_spring_boot_java.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

@Data
@NoArgsConstructor
@Table("shop")
public class Shop implements Model {
    @Id
    private Long id;
    private Long id_shipment;
    private Long id_request;
    private Long id_products_in_stores;
    private Long id_store_inventory;
    private Long id_address;
    private String name;
    private String phone;
    private String email;

    @Override
    public void setId(long id) {
        this.id = id;
    }

    @Override
    public long getId() {
        return this.id;
    }
}
