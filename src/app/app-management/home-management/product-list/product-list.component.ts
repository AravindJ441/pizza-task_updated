import { Component, OnDestroy } from "@angular/core";
import { FormControl } from '@angular/forms';
import { MatDialog } from '@angular/material';
import { CreateEditProductDialogComponent } from 'src/app/dialogs/create-edit-product/create-edit-product.component';
import { HomeManagementService } from 'src/app/services/home-management.service';
import { debounceTime, takeUntil } from 'rxjs/operators';
import { STATUS_IMAGE, STATUS_OF_ORDER } from 'src/app/app.constants';
import {environment} from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';


@Component({
    selector: 'app-product-list',
    templateUrl: './product-list.component.html',
    styleUrls: ['./product-list.component.scss']
})

export class ProductListCompnent implements OnDestroy {
    productList: any[] =[]
    prderCategoryFilters: Array<any> = [...STATUS_OF_ORDER].filter(({value}) => value !==0)
    search: FormControl = new FormControl('');
    pageSize: number = 10;
    currentPage: number = 1;
    totalProductListLength: number = 0;
    selectionControl: FormControl = new FormControl('none');
    status_images = {...STATUS_IMAGE}
    statusArr =[...STATUS_OF_ORDER].reduce((prev,curr) => {
        let obj: any = {};
        let key = curr.value;
        let value = curr.text;
        obj[key] = value;
        return {...prev, ...obj}
    }, {})


    constructor(public homeManagementService: HomeManagementService, public dialog: MatDialog, public httpClient : HttpClient) {



    }
    ngOnInit() {
        this.httpClient.get(environment.baseUrl + `/get-product-list?` ).subscribe((resp: any) => {
           this.homeManagementService.productList =resp;
           this.setPaginationValues();

        })
        this.search.valueChanges.pipe(debounceTime(300)).subscribe((resp) => {
            

            let productList = [];
            this.currentPage =1;
            this.selectionControl.setValue('none')
            if (!resp.length) {
                productList = [...this.homeManagementService.productList]
            } else {
                productList = [...this.homeManagementService.productList].filter((eachProduct) => eachProduct.customerName.toLowerCase().includes(resp.trim().toLowerCase()))
            }
            this.totalProductListLength = productList.length;

            this.productList = [...productList].slice(0, this.pageSize * this.currentPage)
        })
        this.homeManagementService.productAddedSubject.subscribe((resp) => {
            if (resp) {
                // this.homeManagemen   tService.productList.unshift(resp);
                // this.productList = [...this.homeManagementService.productList];

                this.setPaginationValues();
                this.httpClient.post(`${environment.baseUrl}` + '/add-product', resp).subscribe((res: any) => {
                    this.homeManagementService.productList.unshift(res);
                    this.setPaginationValues();

                })

            }
        })
       
    }
    ngOnDestroy() {
    }
    onSelectionChange(event) {
        let productList = []
        if (event.value === 'none') {
            productList = [...this.homeManagementService.productList];
        } else {
            productList = [...this.homeManagementService.productList].filter(({ status }) => status === +event.value.value)

        }
        this.totalProductListLength = productList.length;
        this.productList = [...productList].slice(0, this.pageSize * (this.currentPage));
    }
    orderClicked(eachProduct, index, type) {
        const dialogRef = this.dialog.open(CreateEditProductDialogComponent, {
            data: {
                "type": 'view-order',
                formData: eachProduct,
                'statusButton' : (type === 'view') ? false: true
            }

        })
        dialogRef.afterClosed().subscribe((resp) => {
            if (resp && Object.keys(resp).length) {
                this.homeManagementService.productList[index] = { ...resp };
                this.productList = [...this.homeManagementService.productList]
            }

        })
    }
    onPageChange(event) {
        this.pageSize = event.pageSize;
        this.currentPage = event.pageIndex + 1;
        this.productList = [...this.homeManagementService.productList].slice(0, event.pageSize * (event.pageIndex + 1));
    }
    deleteClicked(index) {

        this.productList.splice(index, 1);
        this.homeManagementService.productList.splice(index, 1);
        this.setPaginationValues();
    }
    setPaginationValues() {
        this.totalProductListLength = this.homeManagementService.productList.length;
        this.productList = [...this.homeManagementService.productList].slice(0, this.pageSize * (this.currentPage));
    }
    valueComparision(o1, o2) {
        return o1 && o2 && o1 == o2;

    }
    likeClicked(eachProduct, i) {
        let params = 
        {
            _id : eachProduct._id,
            like: eachProduct.like +1
        } 
        this.httpClient.post(environment.baseUrl +'/like-product', {...params } ).subscribe((res: any) => {
            this.productList[i].like = res.like;
        });
    }

}