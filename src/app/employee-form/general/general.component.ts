import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-general',
  templateUrl: './general.component.html',
  styleUrls: ['./general.component.scss']
})
export class GeneralComponent implements OnInit {

 

  eGeneralForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    gender: [''],
    age: [''],
    maritalStatus: [''],
    mobileNumber: [''],
    mailId:[''],
    address:['']
  });

  onSubmit() {
  //   // TODO: Use EventEmitter with form value to
  //   //keep the form encapsulated and to provide the form value outside the component.
    console.warn(this.eGeneralForm.value);
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
}
