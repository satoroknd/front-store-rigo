import { Component, OnInit, ViewChild } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatTableDataSource } from '@angular/material/table';
import { Product } from 'src/app/interfaces/product';
import { ProductDetail } from 'src/app/models/product-detail';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {

  productList: Product[] = [];
  displayedColumns: string[] = ['product_code', 'product_description', 'unit_value',];
  dataSrc! : MatTableDataSource<any>;

  tittleAddProducts = 'Add Products';
  disableButton: boolean = false;
  defaultMessage: string = 'No add products yet'; 
  showMessage = false;

  inputProductCode: string = '';
  inputProductDescription: string = '';
  inputUnitValue:number = 0;

  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor( private _productService: ProductService, private _snackBar: MatSnackBar)
  {

  }

  getProduct(){
    this._productService.getProducts().subscribe( resp => {
      this.productList = resp;
      });
    this.dataSrc = new MatTableDataSource(this.productList);
  }

  addProduct(){
    let request = new ProductDetail(0,this.inputProductCode, this.inputProductDescription, this.inputUnitValue);
    this._productService.addProducts(request);
    this.defaultMessage = 'Product added';
  }

  deleteProduct(id: number){
    console.log(id);
    this._snackBar.open('Producto Eliminado', 'Cerrar');
  }


  ngOnInit() {
    this.getProduct();
    }

}
