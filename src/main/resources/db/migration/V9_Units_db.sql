create table units
(
    id bigserial   not null
        constraint units_pk primary key,
    name        varchar(50) not null
)