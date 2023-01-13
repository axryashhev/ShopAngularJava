package com.example.angular_spring_boot_java.model;

import lombok.Data;
import lombok.NoArgsConstructor;
import org.springframework.data.annotation.Id;
import org.springframework.data.relational.core.mapping.Table;

@Data
@NoArgsConstructor
@Table("store_inventory")
public class StoreInventory implements Model {
    @Id
    private Long id;
    private Long id_invoice;


    @Override
    public void setId(long id) {
        this.id = id;
    }

    @Override
    public long getId() {
        return this.id;
    }
}
