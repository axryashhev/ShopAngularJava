create table products_in_stores
(
    id bigserial           not null
        constraint products_in_stores_pk primary key,
    id_invoice           bigserial
        constraint products_in_stores_invoice_fk
            references invoice (id_invoice) not null
)