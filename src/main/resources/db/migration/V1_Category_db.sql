create table category (
    id bigserial    not null
        constraint category_pk primary key,
    name varchar(50) not null
)