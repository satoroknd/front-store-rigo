import { NgModule, CUSTOM_ELEMENTS_SCHEMA  } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard.component';
import { NavbarComponent } from './navbar/navbar.component';
import { DashboardRoutingModule } from './dashboard-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ProductComponent } from './products/product/product.component';
import { CreateProductComponent } from './products/create-product/create-product/create-product.component';
import { OrderComponent } from './orders/order/order.component';
import { CreateOrderComponent } from './orders/create-order/create-order.component';





@NgModule({
  declarations: [
    DashboardComponent,
    NavbarComponent,
    ProductComponent,
    CreateProductComponent,
    OrderComponent,
    CreateOrderComponent
  ],
  imports: [
    CommonModule,
    DashboardRoutingModule,
    SharedModule,
    HttpClientModule
  ],
  exports: [
    DashboardComponent,
    NavbarComponent,
    ProductComponent,
    CreateProductComponent
  ],
  providers:[
    HttpClientModule
  ],
  schemas: [ CUSTOM_ELEMENTS_SCHEMA ]
})
export class DashboardModule { }
