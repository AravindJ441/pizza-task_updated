import { HttpClient } from '@angular/common/http';
import { Component } from "@angular/core";
import { FormControl, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment';



@Component({
    styleUrls:[],
    templateUrl:'./login.component.html',
    selector:'app-login'
})

export class LoginComponent {
    emailFormControl: FormControl = new FormControl('', Validators.compose([Validators.required]));
    password: string = '';
    
    constructor(private http: HttpClient) {

    }


    loginClicked() {
        let email = this.emailFormControl.value;
        let obj = {
            email,
            password: this.password
        }
        this.http.post( `${environment.baseUrl}`+ '/login', obj).subscribe((response: any) => {
            console.log(response, "here")
        })
    }
    signUpClicked() {
        let email =this.emailFormControl.value;
        let obj ={
            email,
            password:this.password
        }
        this.http.post(`${environment.baseUrl}` + '/signup', obj).subscribe((resp: any) => {
            console.log(resp, "response")
        })
    }


}