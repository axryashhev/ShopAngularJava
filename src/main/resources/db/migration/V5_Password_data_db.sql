create table password_data (
    id bigserial not null
        constraint password_data_pk primary key,
    series varchar(4) not null,
    num varchar(6) not null,
    date_issue date not null,
    issued_by varchar(50) not null
)