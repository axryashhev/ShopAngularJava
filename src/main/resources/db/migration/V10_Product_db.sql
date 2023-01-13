create table product
(
    id       bigserial                not null
        constraint product_pk primary key,
    id_category      bigserial
        constraint product_category_fk
            references category (id_category) not null,
    id_units         bigserial
        constraint product_units_fk
            references units (id_units)       not null,
    id_trademark         bigserial
        constraint product_trademark_fk
            references trademark (id_trademark)       not null,
    name             varchar(50)              not null,
    count            integer                  not null,
    price            money                    not null,
    description      varchar(50)              not null,
    date_manufacture date                     null,
    date_expiration  date                     null,
    photo            varchar(255)             not null
)