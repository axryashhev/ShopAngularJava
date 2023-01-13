create table app_user (
    id bigserial not null
        constraint user_pk primary key,
    id_appointment bigserial
        constraint user_appointment_fk
            references appointment (id_appointment) not null,
    id_role bigserial
        constraint user_role_fk
            references role (id_role) not null,
    id_address bigserial
        constraint user_address_fk
            references address (id_address) not null,
    id_password_data bigserial
        constraint user_password_data_fk
            references password_data (id_password_data) not null,
    surname varchar(50) not null,
    name varchar(50) not null,
    patronymic varchar(50) null,
    login varchar(50) not null,
    password varchar(50) not null,
    email varchar(20) not null,
    number_phone varchar(12) not null,
    date_reg date not null
);