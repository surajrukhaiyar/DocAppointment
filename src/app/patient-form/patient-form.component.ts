import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-patient-form',
  templateUrl: './patient-form.component.html',
  styleUrls: ['./patient-form.component.scss']
})
export class PatientFormComponent implements OnInit {

  patientForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    gender: [''],
    age: [''],
    mailId: [''],
    mobileNumber: ['']
  });

 
  onSubmit() {
    // TODO: Use EventEmitter with form value to
    //keep the form encapsulated and to provide the form value outside the component.
    console.warn(this.patientForm.value);
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }
}
