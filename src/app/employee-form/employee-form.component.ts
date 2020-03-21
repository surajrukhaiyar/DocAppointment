import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-employee-form',
  templateUrl: './employee-form.component.html',
  styleUrls: ['./employee-form.component.scss']
})
export class EmployeeFormComponent implements OnInit {
  
  eGeneralForm : FormGroup;
  onSubmit() {
    // TODO: Use EventEmitter with form value to
    //keep the form encapsulated and to provide the form value outside the component.
    console.warn(this.eGeneralForm.value);
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
    this.eGeneralForm = this.fb.group({
      firstName: ['', Validators.required],
      lastName: [''],
      gender: [''],
      age: [''],
      maritalStatus: [''],
      mobileNumber: [''],
      mailId:[''],
      address:['']
    });
  }
}
