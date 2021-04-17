import { Injectable } from "@angular/core";
import { Subject } from 'rxjs';



@Injectable()

export class HomeManagementService {
    productList: Array<{
        'customerName': String,
        'no_of_items': Number,
        'total_amount': Number,
        '_id': String,
        status:Number

    }> = [
        {
            'customerName': 'randomo1',
            'no_of_items': 10,
            'total_amount': 500,
            '_id': '1',
            "status":1
        },
        {
            'customerName': 'randomo1',
            'no_of_items': 10,
            'total_amount': 500,
            '_id': "2",
            "status":2


        },
        {
            'customerName': 'randomo1',
            'no_of_items': 10,
            'total_amount': 500,
            '_id': "3",
            "status":3


        }, {
            'customerName': 'randomo1',
            'no_of_items': 10,
            'total_amount': 500,
            '_id': "4",
            "status": 1


        }, {
            'customerName': 'randomo1',
            'no_of_items': 10,
            'total_amount': 500,
            '_id': "5",
            "status":2


        }, {
            'customerName': 'randomo1',
            'no_of_items': 10,
            'total_amount': 500,
            '_id': "6",
            "status":3

        }, {
            'customerName': 'randomo1',
            'no_of_items': 10,
            'total_amount': 500,
            '_id': "7",
            "status":3


        }, {
            'customerName': 'randomo1',
            'no_of_items': 10,
            'total_amount': 500,
            '_id': "8",
            "status": 2


        }, {
            'customerName': 'randomo1',
            'no_of_items': 10,
            'total_amount': 500,
            '_id': "9",
            "status":2

        }, {
            'customerName': 'randomo1',
            'no_of_items': 10,
            'total_amount': 500,
            '_id': "10",
            "status": 3

        }, {
            'customerName': 'randomo1',
            'no_of_items': 10,
            'total_amount': 500,
            '_id': "11",
            "status":1

        }, {
            'customerName': 'randomo1',
            'no_of_items': 10,
            'total_amount': 500,
            '_id': "12",
            "status":2


        }, {
            'customerName': 'randomo1',
            'no_of_items': 10,
            'total_amount': 500,
            '_id': "13",
            "status":1


        }, {
            'customerName': 'randomo1',
            'no_of_items': 10,
            'total_amount': 500,
            '_id': "14",
            "status":2


        }, {
            'customerName': 'randomo1',
            'no_of_items': 10,
            'total_amount': 500,
            '_id': "15",
            "status":1


        }, {
            'customerName': 'randomo1',
            'no_of_items': 10,
            'total_amount': 500,
            '_id': "16",
            "status":3


        },
    ]
    productAddedSubject: Subject<any> = new Subject();

}