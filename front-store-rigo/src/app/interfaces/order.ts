export interface Order{
    orderID : number;
    productCode: string;
    productDescription: string;
    quantity: number;
    unitValue: number;
    customerDNI: string;
    customerAddress: string
}