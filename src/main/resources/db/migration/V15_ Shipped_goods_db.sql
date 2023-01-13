create table shipped_goods
(
    id  bigserial                     not null
        constraint shipped_goods_pk primary key,
    id_invoice bigserial
        constraint shipped_goods_invoice_fk
            references invoice (id_invoice) not null
)