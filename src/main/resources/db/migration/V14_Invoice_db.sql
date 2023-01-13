create table invoice
(
    id           bigserial                                  not null
        constraint invoice_pk primary key,
    id_appointment       bigserial
        constraint invoice_warehouse_inventory_fk
            references warehouse_inventory (id_warehouse_inventory) not null,
    id_confirmation_note bigserial
        constraint invoice_confirmation_note_fk
            references confirmation_note (id_confirmation_note)     not null,
    id_provider bigserial
        constraint invoice_provider_fk
            references provider (id_provider)     not null,
    price money not null,
    accounted bit not null
)