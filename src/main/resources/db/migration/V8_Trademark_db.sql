create table trademark
(
    id  bigserial                     not null
        constraint trademark_pk primary key,
    id_address bigserial
        constraint trademark_address_fk
            references address (id_address) not null,
    name        varchar(50)                   not null,
    phone varchar(12) not null
)