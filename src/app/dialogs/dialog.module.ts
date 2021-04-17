import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { CreateEditProductDialogComponent } from './create-edit-product/create-edit-product.component';
import {MatSelectModule} from '@angular/material/select';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
    declarations:[
        CreateEditProductDialogComponent
    ],

    entryComponents: [],
    imports: [
        CommonModule,
        MatSelectModule,
        ReactiveFormsModule
    ],
    exports: [
        CreateEditProductDialogComponent
    ]
})

export class DialogModule {

}