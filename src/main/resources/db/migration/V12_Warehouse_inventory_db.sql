create table warehouse_inventory
(
    id bigserial    not null
        constraint warehouse_inventory_pk primary key,
    id_stock               bigserial
        constraint warehouse_inventory_stock_fk
            references stock (id_stock) not null,
    data_holding           date         not null,
    count integer not null
)