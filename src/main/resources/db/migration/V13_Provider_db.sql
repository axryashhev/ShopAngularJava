create table provider
(
    id bigserial                   not null
        constraint provider_pk primary key,
    id_address  bigserial
        constraint provider_address_fk
            references address (id_address) not null,
    name        varchar(50)                 not null,
    CPP         varchar(9)                  not null,
    INN         varchar(10)                 not null,
    photo       varchar(255)                not null
)