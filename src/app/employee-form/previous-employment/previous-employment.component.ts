import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
@Component({
  selector: 'app-previous-employment',
  templateUrl: './previous-employment.component.html',
  styleUrls: ['./previous-employment.component.scss']
})
export class PreviousEmploymentComponent implements OnInit {

  ePreviousEmploymentForm = this.fb.group({
    organisation: ['', Validators.required],
    designation: [''],
    fromDate: [''],
    toDate: [''],
    totalSalary: ['']
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value to
    //keep the form encapsulated and to provide the form value outside the component.
    console.warn(this.ePreviousEmploymentForm.value);
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
