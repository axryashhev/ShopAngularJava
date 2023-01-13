create table role (
    id bigserial   not null
        constraint role_pk primary key,
    name        varchar(50) not null
)