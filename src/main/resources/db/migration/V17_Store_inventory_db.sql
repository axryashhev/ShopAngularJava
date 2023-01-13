create table store_inventory (
    id bigserial       not null
        constraint store_inventory_pk primary key,
    id_invoice              bigserial
        constraint store_inventory_invoice_fk
            references invoice (id_invoice) not null
)