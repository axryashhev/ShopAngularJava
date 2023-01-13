create table address (
      id bigserial not null
          constraint address_pk primary key,
      city varchar(50) not null,
      street varchar(50) not null,
      house varchar(50) not null
)