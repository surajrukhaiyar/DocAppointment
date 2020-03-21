import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.scss']
})
export class EducationComponent implements OnInit {

  eEducationDetailForm = this.fb.group({
    qualification: ['', Validators.required],
    institution: [''],
    university: [''],
    yearOfCompletion: [''],
    percentage: [''],
    city:[''],
    pinCode:['']
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value to
    //keep the form encapsulated and to provide the form value outside the component.
    console.warn(this.eEducationDetailForm.value);
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
