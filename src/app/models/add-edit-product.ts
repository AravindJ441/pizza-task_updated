




export class AddEditProduct {
    productName: any;
    productCategory: any;
    quantity: any;
    price: any;

    constructor(formData) {
        this.productName = formData.productName,
        this.productCategory= formData.productCategory,
        this.quantity = formData.quantity,
        this.price =formData.price

    }
}