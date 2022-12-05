import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Order } from "../interfaces/order";
import { OrderDetailPurchase } from "../models/order-detail-purchase";

@Injectable({
    providedIn: 'root'
})
export class OrderService {

    private getOrdersUrl = '/api/Order/GetOrders'
    private saveOrdersUrl = '/api/Order/AddOrders';

    orderDetails: OrderDetailPurchase[] = [];

    constructor(private _http: HttpClient) { }


    getOrders(){
        return this._http.get<Order[]>(this.getOrdersUrl);
    }

    addOrders(request: OrderDetailPurchase[]){
        this.saveChangeOrders(request);
      }
    saveChangeOrders(request: OrderDetailPurchase[]) {
        this._http.post(this.saveOrdersUrl,request)
        .subscribe(response=> console.log(response)
        , error => console.log(error)
        );
    }

}