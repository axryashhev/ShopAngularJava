create table stock
(
    id   bigserial                    not null
        constraint stock_pk primary key,
    id_product bigserial
        constraint stock_product_fk
            references product (id_product) not null,
    id_user    bigserial
        constraint stock_user_fk
            references app_user (id_user)       not null,
    id_address bigserial
        constraint stock_address_fk
            references address (id_address) not null
)