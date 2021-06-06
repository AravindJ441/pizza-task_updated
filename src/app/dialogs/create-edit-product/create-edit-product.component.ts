import { Component, Inject, OnDestroy } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';
import { ACCEPTABLE_FILE_FORMATS, STATUS_OF_ORDER } from 'src/app/app.constants';
import { AddEditProduct } from 'src/app/models/add-edit-product';
import { HomeManagementService } from 'src/app/services/home-management.service';



@Component({
    selector: 'create-edit-product',
    templateUrl: './create-edit-product.component.html',
    styleUrls: ['./create-edit-product.component.scss']
})

export class CreateEditProductDialogComponent implements OnDestroy {

    // productCategories: Array<String> = ['Apparels', 'Shoes', 'Cosmetics'];
    // imageAvailable: boolean = false;
    // image: any = ''
    addEditFormGroup: FormGroup;
    currentStatus: number = 0;
    customerName: String;
    noOfItems: number;
    totalAmount: number;
    statusArr = [...STATUS_OF_ORDER].reduce((prev, curr) => {
        let obj: any = {};
        let key = curr.value;
        let value = curr.text;
        obj[key] = value;
        return { ...prev, ...obj }
    }, {})
    constructor(public dialogRef: MatDialogRef<CreateEditProductDialogComponent>,
        @Inject(MAT_DIALOG_DATA) public data: any, public fb: FormBuilder, public homeManagementService: HomeManagementService) {
        this.addEditFormGroup = this.fb.group({
            'productName': ['', Validators.required],
            // 'productCategory': ['', Validators.required],
            'quantity': ['', Validators.required],
            'price': ['', Validators.required]
        })
    }
    ngOnInit() {
        // if(this.data.type === 'edit-product') {
        //     let formGroupData = new AddEditProduct(this.data.formData);
        //     this.addEditFormGroup.patchValue(formGroupData);
        //     if(this.data.formData.imageUrl) {
        //         this.imageAvailable=true;
        //         this.image = this.data.formData.imageUrl
        //     } else {
        //         this.imageAvailable=false;
        //     }
        // }
         if (this.data.type == 'view-order') {
            this.customerName = this.data.formData.customerName;
            this.currentStatus = this.data.formData.status;
            this.noOfItems = this.data.formData.no_of_items;
            this.totalAmount = this.data.formData.total_amount;
        }

    }

    ngOnDestroy(): void {
    }

    // fileChange(event) {

    //     let file = event.target.files[0];
    //     if (ACCEPTABLE_FILE_FORMATS.includes(file.type)) {
    //         let reader = new FileReader();
    //         reader.onloadend = () => {
    //             // console.log(reader.result, "result")
    //             this.imageAvailable = true;
    //             this.image = reader.result;
    //         }
    //         reader.readAsDataURL(file);
    //     } else {

    //     }

    // }
    buttonClick(bool) {
        // if(bool) {

        //     if (this.addEditFormGroup.valid && this.imageAvailable) {
        //         if(this.data.type === 'new-product') {

        //             this.homeManagementService.productList.unshift({
        //                 imageUrl : this.image,
        //                 ...this.addEditFormGroup.value,
        //                 _id : (this.data && this.data.formData && this.data.formData._id) ? this.data.formData._id :new Date().getUTCMilliseconds()
        //             })
        //             this.homeManagementService.productAddedSubject.next(true)
        //             this.dialogRef.close()
        //         } else {

        //             this.dialogRef.close({
        //                 imageUrl : this.image,
        //                 ...this.addEditFormGroup.value,
        //                 _id : (this.data.formData && this.data.formData._id) ? this.data.formData._id :new Date().getUTCMilliseconds()
        //             })
        //         }




        //     } else {
        //         for (let control in this.addEditFormGroup.controls) {
        //             this.addEditFormGroup.controls[control].markAsTouched();

        //         }
        //     }
        // } else {
        //     this.dialogRef.close({})
        // }
        if (bool) {
            if (this.data.type === 'create-order') {

                if (this.addEditFormGroup.valid) {
                    this.dialogRef.close({
                        customerName: this.addEditFormGroup.controls.productName.value,
                        no_of_items: this.addEditFormGroup.controls.quantity.value,
                        total_amount: this.addEditFormGroup.get('price').value,
                        status: 2
                    })

                } else {
                    for (let eachControl in this.addEditFormGroup.controls) {
                        this.addEditFormGroup.controls[eachControl].markAsTouched();
                    }
                }
            } else {
                this.dialogRef.close({
                    _id: this.data.formData._id,
                    customerName: this.customerName,
                    no_of_items: this.noOfItems,
                    total_amount: this.totalAmount,
                    status: this.currentStatus

                });
            }

        } else {
            this.dialogRef.close();
        }
    }

    changeStatusClicked() {
        if (this.currentStatus >= 3) {
            this.currentStatus = 0
        } else {
            this.currentStatus++;
        }
    }

    numberOnly(event: any) {
        let value = event.key;
        if ((isNaN(value) || (typeof (+event.key) !== 'number') || (event.keyCode == 32)) && ![45, 46].includes(event.keyCode)) {
            event.preventDefault();
            return false
        } else {
            return true
        }
    }


}