import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { KickOffComponent } from "../kick-off/kick-off/kick-off.component";
import { DashboardComponent } from "./dashboard.component";
import { CreateOrderComponent } from "./orders/create-order/create-order.component";
import { OrderComponent } from "./orders/order/order.component";
import { CreateProductComponent } from "./products/create-product/create-product/create-product.component";
import { ProductComponent } from "./products/product/product.component";

const routes: Routes = [
    {
      path: '',
      component: DashboardComponent, children: [
        {
          path: '',
          component: KickOffComponent
        },
        {
          path: 'Order',
          component: OrderComponent
        },
        {
          path: 'Order/Add-Order',
          component: CreateOrderComponent
        },
        {
          path: 'Product',
          component: ProductComponent
        },
        {
          path: 'Product/Add-Product',
          component: CreateProductComponent
        }
      ]
    }
  ];
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
  export class DashboardRoutingModule { }