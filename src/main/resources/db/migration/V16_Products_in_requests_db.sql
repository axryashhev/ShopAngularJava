create table products_in_requests
(
    id bigserial              not null
        constraint products_in_requests_pk primary key,
    id_invoice       bigserial
        constraint products_in_requests_invoice_fk
            references invoice (id_invoice) not null
)