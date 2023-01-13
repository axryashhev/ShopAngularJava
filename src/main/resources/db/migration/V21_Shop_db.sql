create table shop
(
    id                    bigserial                               not null
        constraint shop_pk primary key,
    id_shipment           bigserial
        constraint shop_shipment_fk
            references shipment (id_shipment)                     not null,
    id_request            bigserial
        constraint shop_request_fk
            references request (id_request)                       not null,
    id_products_in_stores bigserial
        constraint shop_products_in_stores_fk
            references products_in_stores (id_products_in_stores) not null,
    id_store_inventory    bigserial
        constraint shop_store_inventory_fk
            references store_inventory (id_store_inventory)       not null,
    id_address            bigserial
        constraint shop_address_fk
            references address (id_address)                       not null,
    name                  varchar(50)                             not null,
    phone                 varchar(12)                             not null,
    email                 varchar(20)                             not null
)