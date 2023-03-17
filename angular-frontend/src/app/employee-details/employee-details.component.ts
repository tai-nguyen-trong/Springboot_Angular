// import { Component } from '@angular/core';

// @Component({
//   selector: 'app-employee-details',
//   templateUrl: './employee-details.component.html',
//   styleUrls: ['./employee-details.component.css']
// })
// export class EmployeeDetailsComponent {

// }


import { Component, OnInit } from '@angular/core';
import { Employee } from '../employee';
import { ActivatedRoute } from '@angular/router';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.css']
})
export class EmployeeDetailsComponent implements OnInit {

  id!: number
  employee!: Employee

  // id: number = 0;
  // employee: Employee = {
  //   id: 0,
  //   firstName: '',
  //   lastName: '',
  //   emailId: ''
  // };
  constructor(private route: ActivatedRoute, private employeService: EmployeeService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];

    // this.employee = new Employee();
    this.employee = new Employee("", "", "");
    
    this.employeService.getEmployeeById(this.id).subscribe( data => {
      this.employee = data;
    });
  }

// export class EmployeeDetailsComponent implements OnInit {
//   id: number;
//   employee: Employee;

//   constructor(private route: ActivatedRoute, private employeeService: EmployeeService) { }

//   ngOnInit(): void {
//     this.id = this.route.snapshot.params['id'];

//     this.employeeService.getEmployeeById(this.id)
//       .subscribe(data => {
//         console.log(data);
//         this.employee = data;
//       }, error => console.log(error));
//   }

}
