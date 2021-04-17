import { Component } from "@angular/core";
import { MatDialog } from '@angular/material';
import { CreateEditProductDialogComponent } from 'src/app/dialogs/create-edit-product/create-edit-product.component';
import { HomeManagementService } from 'src/app/services/home-management.service';




@Component({
    styleUrls:['./home-management.component.scss'],
    templateUrl: './home-management.component.html',
    selector:'app-home-management'
})
export class HomeManagement {
    constructor(private dialog: MatDialog, private homeManagementService: HomeManagementService ) {

    }

    ngOnInit() {

    }

    newProductClicked() {
        const dialogRef = this.dialog.open(CreateEditProductDialogComponent, {
            data: {
               type :"create-order" 
            }
        })
        dialogRef.afterClosed().subscribe((resp: any) => {
            if(resp && Object.keys(resp).length) {
                this.homeManagementService.productAddedSubject.next({...resp});
            }

        })

    }
}