namespace Constants {
  export const dataDashboard = [
    'category',
    'product',
    'address',
    'appointment',
    'invoice',
    'password_data',
    'products_in_requests',
    'products_in_stores',
    'provider',
    'request',
    'shipment',
    'shipped_goods',
    'shops',
    'stock',
    'store_inventory',
    'trademark',
    'units',
    'warehouse_inventory',
  ];
  export enum RealApi {
    PRODUCTS = '/api/product',
    CATEGORIES = '/api/category',
    UNITS = '/api/units',
    TRADEMARK = '/api/trademark',
    ADDRESS = '/api/address',
    APPOINTMENT = '/api/appointment',
    PASSWORD_DATA = '/api/password_data',
    PROVIDER = '/api/provider',
    APP_USER = '/api/app_user',
    ROLE = '/api/role',
    CONFIRMATION_NOTE = '/api/confirmation_note',
    STOCK = '/api/stock',
    WAREHOUSE_INVENTORY = '/api/warehouse_inventory',
    INVOICE = '/api/invoice',
    PRODUCTS_IN_REQUESTS = '/api/products_in_requests',
    PRODUCTS_IN_STORES = '/api/products_in_stores',
    REQUEST = '/api/request',
    SHIPPED_GOODS = '/api/shipped_goods',
    SHIPMENT = '/api/shipment',
    STORE_INVENTORY = '/api/store_inventory',
    SHOP = '/api/shop',
  }
  export enum DebugApi {
    PRODUCTS = 'assets/json/product.json',
    CATEGORIES = 'assets/json/category.json',
    UNITS = 'assets/json/units.json',
    TRADEMARK = 'assets/json/trademark.json',
    ADDRESS = 'assets/json/address.json',
    APPOINTMENT = 'assets/json/appointment.json',
    PASSWORD_DATA = 'assets/json/password_data.json',
    PROVIDER = 'assets/json/provider.json',
    APP_USER = 'assets/json/app_user.json',
    ROLE = 'assets/json/role.json',
    CONFIRMATION_NOTE = 'assets/json/confirmation_note.json',
    STOCK = 'assets/json/stock.json',
    WAREHOUSE_INVENTORY = 'assets/json/warehouse_inventory.json',
    INVOICE = 'assets/json/invoice.json',
    PRODUCTS_IN_REQUESTS = 'assets/json/products_in_requests.json',
    PRODUCTS_IN_STORES = 'assets/json/products_in_stores.json',
    REQUEST = 'assets/json/request.json',
    SHIPPED_GOODS = 'assets/json/shipped_goods.json',
    SHIPMENT = 'assets/json/shipment.json',
    STORE_INVENTORY = 'assets/json/store_inventory.json',
    SHOP = 'assets/json/shop.json',
  }

  export enum Action {
    UPDATE,
    ADD,
  }
  export enum Role {
    WORKER = 1,
    MANAGER,
  }
}

export default Constants;
