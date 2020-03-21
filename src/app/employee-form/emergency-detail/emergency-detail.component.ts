import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-emergency-detail',
  templateUrl: './emergency-detail.component.html',
  styleUrls: ['./emergency-detail.component.scss']
})
export class EmergencyDetailComponent implements OnInit {

  eEmergencyDetailForm = this.fb.group({
    firstName: ['', Validators.required],
    lastName: [''],
    mobileNumber: [''],
    relationship: ['']
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value to
    //keep the form encapsulated and to provide the form value outside the component.
    console.warn(this.eEmergencyDetailForm.value);
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
