import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Product } from "../interfaces/product";
import { ProductDetail } from "../models/product-detail";

@Injectable({
    providedIn: 'any'
})
export class ProductService {

private getProductsUrl = '/api/Product/GetProducts';
private saveProductsUrl = '/api/Product/AddProduct';

constructor(private _http: HttpClient) { }

    getProducts(){
        return this._http.get<Product[]>(this.getProductsUrl);
    }

    addProducts(request: ProductDetail){
     this.saveChangeProducts(request);
    }

    saveChangeProducts(productDetail: ProductDetail){
     this._http.post(this.saveProductsUrl,productDetail).subscribe(response=> console.log(response), error => console.log(error));
    }

}