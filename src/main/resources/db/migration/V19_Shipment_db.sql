create table shipment (
    id      bigserial                          not null
        constraint shipment_pk primary key,
    id_shipped_goods bigserial
        constraint shipment_shipped_goods_fk
            references shipped_goods (id_shipped_goods) not null,
    data_shipment    date                               not null
)