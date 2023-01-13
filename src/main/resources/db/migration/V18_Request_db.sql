create table request
(
    id bigserial            not null
        constraint request_pk primary key,
    id_products_in_requests         bigserial
        constraint request_products_in_requests_fk
            references products_in_requests (id_products_in_requests) not null,
    data_request date not null
)