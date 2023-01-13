import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { MobxAngularModule } from 'mobx-angular';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule, Routes } from '@angular/router';
import { FormComponent } from './components/form/form.component';
import { ServiceStreamComponent } from './components/ServiceStream/ServiceStream.component';
import { AppHeaderComponent } from './components/app-header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ShopComponent } from './components/shop/shop.component';
import { ProductSingleComponent } from './components/product-single/product-single.component';
import { SidebarComponent } from './components/sidebar/sidebar.component';
import { FooterComponent } from './components/footer/footer.component';
import { DashboardComponent } from './components/admin/dashboard/dashboard.component';
import { CategoryComponent } from './components/admin/category/category.component';
import { ProductsComponent } from './components/admin/products/products.component';
import { ProductAddComponent } from './components/admin/products/components/product-add/product-add.component';
import { AddCategoryComponent } from './components/admin/category/components/add-category/add-category.component';
import { LoadingDataService } from '../services/loading-data/loading-data.service';
import { RatingComponent } from './components/rating/rating.component';
import { RootStoreService } from './services/stores/root/root-store.service';
import { ModifyDataComponent } from './components/modify-data/modify-data.component';
import { AddressComponent } from './components/admin/address/address.component';
import { ViewDataComponent } from './components/admin/util/view-data/view-data.component';
import { AddViewComponent } from './components/admin/util/add-view/add-view.component';
import { AppointmentComponent } from './components/admin/appointment/appointment.component';
import { PasswordDataComponent } from './components/admin/password-data/password-data.component';
import { UnitsComponent } from './components/admin/units/units.component';
import { AddSimpleViewComponent } from './components/admin/util/add-simple-view/add-simple-view.component';
import { ViewSimpleDataComponent } from './components/admin/util/view-simple-data/view-simple-data.component';
import { ProviderComponent } from './components/admin/provider/provider.component';
import { AppUserComponent } from './components/admin/app-user/app-user.component';
import { ConfirmationNoteComponent } from './components/admin/confirmation-note/confirmation-note.component';
import { StockComponent } from './components/admin/stock/stock.component';
import { WarehouseInventoryComponent } from './components/admin/warehouse-inventory/warehouse-inventory.component';
import { TrademarkComponent } from './components/admin/trademark/trademark.component';
import { InvoiceComponent } from './components/admin/invoice/invoice.component';
import { ProductsInRequestsComponent } from './components/admin/products-in-requests/products-in-requests.component';
import { ProductsInStoresComponent } from './components/admin/products-in-stores/products-in-stores.component';
import { RequestComponent } from './components/admin/request/request.component';
import { RoleComponent } from './components/admin/role/role.component';
import { ShippedGoodsComponent } from './components/admin/shipped-goods/shipped-goods.component';
import { ShipmentComponent } from './components/admin/shipment/shipment.component';
import { StoreInventoryComponent } from './components/admin/store-inventory/store-inventory.component';
import { ShopsComponent } from './components/admin/shops/shops.component';
import { PrintedFormComponent } from './components/admin/util/printed-form/printed-form.component';

const adminRoutes: Routes = [
  { path: 'category', component: CategoryComponent },
  { path: 'product', component: ProductsComponent },
  { path: 'product_add', component: ProductAddComponent },
  { path: 'add_view', component: AddViewComponent },
  { path: 'address', component: AddressComponent },
  { path: 'app_user', component: AppUserComponent },
  { path: 'appointment', component: AppointmentComponent },
  { path: 'password_data', component: PasswordDataComponent },
  { path: 'units', component: UnitsComponent },
  { path: 'provider', component: ProviderComponent },
  { path: 'confirmation_note', component: ConfirmationNoteComponent },
  { path: 'stock', component: StockComponent },
  { path: 'warehouse_inventory', component: WarehouseInventoryComponent },
  { path: 'trademark', component: TrademarkComponent },
  { path: 'invoice', component: InvoiceComponent },
  { path: 'products_in_requests', component: ProductsInRequestsComponent },
  { path: 'products_in_stores', component: ProductsInStoresComponent },
  { path: 'request', component: RequestComponent },
  { path: 'role', component: RoleComponent },
  { path: 'shipped_goods', component: ShippedGoodsComponent },
  { path: 'shipment', component: ShipmentComponent },
  { path: 'store_inventory', component: StoreInventoryComponent },
  { path: 'shops', component: ShopsComponent },
  { path: 'printer_form', component: PrintedFormComponent },
];

// определение маршрутов
const appRoutes: Routes = [
  { path: 'form', component: FormComponent },
  { path: '', component: ServiceStreamComponent },
  { path: 'shop', component: ShopComponent },
  { path: 'shop/:id', component: ProductSingleComponent },
  { path: 'admin', component: DashboardComponent, children: adminRoutes },
];

@NgModule({
  declarations: [
    AppHeaderComponent,
    AppComponent,
    ServiceStreamComponent,
    FormComponent,
    ShopComponent,
    ProductSingleComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    CategoryComponent,
    ProductsComponent,
    ProductAddComponent,
    AddCategoryComponent,
    RatingComponent,
    ModifyDataComponent,
    AddressComponent,
    ViewDataComponent,
    AddViewComponent,
    AppointmentComponent,
    PasswordDataComponent,
    UnitsComponent,
    AddSimpleViewComponent,
    ViewSimpleDataComponent,
    ProviderComponent,
    AppUserComponent,
    ConfirmationNoteComponent,
    StockComponent,
    WarehouseInventoryComponent,
    TrademarkComponent,
    InvoiceComponent,
    ProductsInRequestsComponent,
    ProductsInStoresComponent,
    RequestComponent,
    RoleComponent,
    ShippedGoodsComponent,
    ShipmentComponent,
    StoreInventoryComponent,
    ShopsComponent,
    PrintedFormComponent,
    // AddSimpleDataComponent,
  ],
  imports: [
    RouterModule.forRoot(appRoutes),
    BrowserModule,
    NgbModule,
    FormsModule,
    HttpClientModule,
    MobxAngularModule,
  ],
  // RootStoreService,
  providers: [LoadingDataService, RootStoreService],
  bootstrap: [AppComponent],
})
export class AppModule {}
