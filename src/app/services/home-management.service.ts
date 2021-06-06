import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';



@Injectable()

export class HomeManagementService {
    productList: Array<{
        'customerName': String,
        'no_of_items': Number,
        'total_amount': Number,
        '_id': String,
        status:Number,
        like?:Number

    }> = []
    productAddedSubject: Subject<any> = new Subject();

}