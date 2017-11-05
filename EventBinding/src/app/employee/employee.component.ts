import { Component } from '@angular/core';
@Component({
    selector: 'employee-detail',
    templateUrl: './employee.component.html',
    styleUrls:['./employee.component.css']

})
export class EmployeeComponent {
    firstname: string = 'kumar';
    lastname: string = 'shubhendu';
    age: number = 12;
    gender: string = 'male';
    sharedetails: boolean = false;

    onclick() {
        this.sharedetails = !this.sharedetails;
      //  alert("you are learning angular2");
    }

}