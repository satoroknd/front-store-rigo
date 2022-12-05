import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';
import { ProductDetail } from 'src/app/models/product-detail';
import { ProductService } from 'src/app/services/product.service';

@Component({
  selector: 'app-create-product',
  templateUrl: './create-product.component.html',
  styleUrls: ['./create-product.component.css']
})
export class CreateProductComponent implements OnInit {

  form : FormGroup;
  selectedValue: string;
  selectedCar: string;

  productTypes: any[] = ['freno', 'llanta', 'marco'];


  constructor( private _productService: ProductService, private _snackBar: MatSnackBar, private fb: FormBuilder, private _router: Router)
  { 
    //Se setea los campos del formulario
    this.form = this.fb.group({
      productCode:['', Validators.required],
      productDescription:['', Validators.required],
      unitValue:['', Validators.required]
    });
  }

  addProduct() {
    console.log(this.form);
    const product : ProductDetail= {
      productID: 0,
      productCode : this.form.value.productCode,
      productDescription : this.form.value.productDescription,
      unitValue : this.form.value.unitValue
    }
    this._productService.addProducts(product);
    this._snackBar.open('Producto Guardado Correctamente', 'Cerrar');
    setTimeout(()=>{
      this._router.navigate(['dashboard/Product']);
    },1500);
  }

  ngOnInit() {

  }

}
