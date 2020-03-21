import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
@Component({
  selector: 'app-personal',
  templateUrl: './personal.component.html',
  styleUrls: ['./personal.component.scss']
})
export class PersonalComponent implements OnInit {

  ePersonalDetailForm = this.fb.group({
    aadharNo: ['', Validators.required],
    passportNo: [''],
    expiryDate: [''],
    dlNo: [''],
    dlExpiryDate: [''],
    panNo: [''],
    dateOfJoining:[''],
    employementType:[''],
    languageKnown:['']
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value to
    //keep the form encapsulated and to provide the form value outside the component.
    console.warn(this.ePersonalDetailForm.value);
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
