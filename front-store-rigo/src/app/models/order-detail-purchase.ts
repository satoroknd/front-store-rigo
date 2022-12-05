export class OrderDetailPurchase  {
    constructor(public productID: number,
         public productCode: string, public productDescription: string,
          public quantity: number, public unitValue: number,public customerDNI: string, public customerAddress: string){}
}
