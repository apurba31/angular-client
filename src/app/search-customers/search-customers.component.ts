import { Component, OnInit, Input} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { EmployeeService } from '../employee.service';

@Component({
  selector: 'app-search-customers',
  templateUrl: './search-customers.component.html',
  styleUrls: ['./search-customers.component.css']
})
export class SearchCustomersComponent implements OnInit {

  public name = 'Lorem Ipsum';
  public successClass = "text-success";
  public hasError = false;
  public isSpecial = true;
  public messageClasses = {
    "text-success": !this.hasError,
    "text-danger": this.hasError,
    "text-special": this.isSpecial
  }
  
  public nameNew = "";

  public greeting = "";

  public colors = ["red", "blue", "black", "green", "yellow"];

  public employees = [];

  constructor(private _employeeService: EmployeeService) {}

  //@Input() public parentData;

  ngOnInit() {
    //this.employees = this._employeeService.getEmployees();
  }

  greetUser(){
    return "Hello" + this.name;
  }

  onClick(){
    console.log('This is correct!')
    this.greeting = "Welcome!"
  }
}
