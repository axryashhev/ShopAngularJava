create table appointment (
    id bigserial not null
        constraint appointment_pk primary key,
    name varchar(50),
    salary integer
)