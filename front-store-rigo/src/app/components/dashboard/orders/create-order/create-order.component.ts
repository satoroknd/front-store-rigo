import { ChangeDetectorRef, Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { Product } from 'src/app/interfaces/product';
import { OrderDetailPurchase } from 'src/app/models/order-detail-purchase';
import { OrderService } from 'src/app/services/order.service';
import { ProductService } from 'src/app/services/product.service';
import { MatTable } from '@angular/material/table';


@Component({
  selector: 'app-create-order',
  templateUrl: './create-order.component.html',
  styleUrls: ['./create-order.component.css']
})
export class CreateOrderComponent implements OnInit {

  form : FormGroup;
  tableTemp: OrderDetailPurchase[] = [];
  productSelect: [] = []; 
  dataSelect : [] = [];
  requestData : OrderDetailPurchase[] = [];
  products:  Product[] = [];
  totalValue: number;

  inputCustomerDNI: string ='';

  displayedColumns: string[] = ['product_code', 'product_description', 'quantity', 'unit_value'];


  @ViewChild(MatTable) dataTable!: MatTable<OrderDetailPurchase>;


  constructor(private _changeDetectorRefs: ChangeDetectorRef,private _orderService: OrderService, private _snackBar: MatSnackBar, private fb: FormBuilder, private _router: Router, private _productService: ProductService){
        //Se setea los campos del formulario
        this.form = this.fb.group({
          selectionProduct:['', Validators.required],
          quantity:['', Validators.required],
          customerDNI:['', Validators.required],
          customerAddress:['', Validators.required]
        });
  }

  loadProducts(){
    this._productService.getProducts().subscribe( resp => {
      this.products = resp;
      });
  }

  CaptureSelectData(){
    console.log(this.form.value.selectionProduct);
    this.addTemportalOrderDetails();  
  }

  addTemportalOrderDetails(){
    this.inputCustomerDNI = this.form.value.customerDNI;
    let detail = new OrderDetailPurchase(this.form.value.selectionProduct.productID,this.form.value.selectionProduct.productCode,this.form.value.selectionProduct.productDescription,this.form.value.quantity,
      this.form.value.selectionProduct.unitValue,this.form.value.customerDNI, this.form.value.customerAddress);
    console.log(detail);
    if(this.form.value.quantity > 0)
    {
      this.tableTemp.push(detail);
    }
    
    this.dataTable.renderRows();
    console.log(this.tableTemp);
    // this.form.reset();
  }

  totalOrder(){
   this.totalValue =  this.tableTemp.reduce((accum,item) => accum + (item.quantity * item.unitValue), 0);
  }

  addOrder(){
    this.requestData = this.tableTemp;
    this._orderService.addOrders(this.requestData);
    this._snackBar.open('Orden Creada Correctamente', 'Cerrar');
    setTimeout(()=>{
      this._router.navigate(['dashboard/Order']);
    },1500);
  }

  // addOrderV0() {
  //   console.log(this.form);
  //   const order : OrderDetailPurchase= {
  //     productID: 0,
  //     productCode : this.form.value.productCode,
  //     productDescription : this.form.value.productDescription,
  //     quantity : this.form.value.productDescription,
  //     unitValue : this.form.value.unitValue,
  //     customerDNI : this.form.value.customerDNI,
  //     customerAddress : this.form.value.customerAddress
  //   }
  //   this._orderService.addOrders(order);
  //   this._snackBar.open('Orden Guardado Correctamente', 'Cerrar');
  //   setTimeout(()=>{
  //     this._router.navigate(['dashboard/Order']);
  //   },1500);
  // }


  ngOnInit() {
    this.loadProducts();
  }


}
