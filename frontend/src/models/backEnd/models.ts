namespace BackEndData {
  export interface category {
    id: number;
    name: string;
  }

  export interface address {
    id: number;
    city: string;
    street: string;
    house: string;
  }

  export interface appointment {
    id: number;
    name: string;
    salary: number;
  }

  export interface role {
    id: number;
    name: string;
  }

  export type password_data = {
    id: number;
    series: string;
    num: string;
    date_issue: Date;
    issued_by: string;
  };

  export interface app_user {
    id: number;
    id_appointment: number;
    id_role: number;
    id_address: number;
    id_password_data: number;
    surname: string;
    name: string;
    patronymic: string;
    login: string;
    password: string;
    // пароль не светим, для отправки пароля в форме дается новый тип
    // password varchar(50) not null,
    email: string;
    number_phone: string;
    date_reg: Date;
    photo: string;
  }

  export interface confirmation_note {
    id: number;
    id_user: number;
    create_date: Date;
    status: boolean;
  }

  export interface trademark {
    id: number;
    id_address: number;
    name: string;
    phone: string;
  }

  export interface units {
    id: number;
    name: string;
  }

  export interface product {
    id: number;
    id_category: number;
    id_trademark: number;
    id_units: number;
    name: string;
    count: number;
    price: string;
    description: string;
    date_manufacture: Date;
    date_expiration: Date;
    photo: string;
  }

  export interface stock {
    id: number;
    id_product: number;
    id_user: number;
    id_address: number;
  }

  export interface warehouse_inventory {
    id: number;
    id_stock: number;
    date_holding: Date;
    count: number;
  }

  export interface provider {
    id: number;
    id_address: number;
    name: string;
    CPP: string;
    INN: string;
    photo: string;
  }

  export interface invoice {
    id: number;
    id_appointment: number;
    id_confirmation_note: number;
    id_provider: number;
    price: string;
    accounted: boolean;
  }

  export interface shipped_goods {
    id: number;
    id_invoice: number;
  }

  export interface products_in_requests {
    id: number;
    id_invoice: number;
  }

  export interface store_inventory {
    id: number;
    id_invoice: number;
  }

  export interface request {
    id: number;
    id_products_in_requests: number;
    date_request: Date;
  }

  export interface shipment {
    id: number;
    id_shipped_goods: number;
    data_shipment: Date;
  }

  export interface products_in_stores {
    id: number;
    id_invoice: number;
  }

  export interface shop {
    id: number;
    id_shipment: number;
    id_request: number;
    id_products_in_stores: number;
    id_store_inventory: number;
    id_address: number;
    name: string;
    phone: string;
    email: string;
  }
}

export default BackEndData;
