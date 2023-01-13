create table confirmation_note
(
    id bigserial    not null
        constraint confirmation_note_pk primary key,
    id_user              bigserial
        constraint confirmation_note_user_fk
            references app_user (id_user) not null,
    create_date          date         not null,
    status               bit          not null
)