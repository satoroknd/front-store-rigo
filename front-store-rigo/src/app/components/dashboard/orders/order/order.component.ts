import { Component, OnInit } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { Order } from 'src/app/interfaces/order';
import { OrderService } from 'src/app/services/order.service';

@Component({
  selector: 'app-order',
  templateUrl: './order.component.html',
  styleUrls: ['./order.component.css']
})

export class OrderComponent implements OnInit {


  orderList: Order[] = [];
  displayedColumns: string[] = ['orderID', 'product_code', 'product_description', 'quantity', 'unit_value', 'customer_dni', 'customer_address'];
  dataSrc! : MatTableDataSource<any>;

  constructor(private _orderService: OrderService){

  }

  getOrders(){
    this._orderService.getOrders().subscribe( resp => {
      this.orderList = resp;
      });
    this.dataSrc = new MatTableDataSource(this.orderList);
  }

  ngOnInit() {
    this.getOrders();
  }


  
}
