import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms'
@Component({
  selector: 'app-salary',
  templateUrl: './salary.component.html',
  styleUrls: ['./salary.component.scss']
})
export class SalaryComponent implements OnInit {

  eSalaryForm = this.fb.group({
    organisation: ['', Validators.required],
    designation: [''],
    fromDate: [''],
    toDate: [''],
    totalSalary: ['']
  });

  onSubmit() {
    // TODO: Use EventEmitter with form value to
    //keep the form encapsulated and to provide the form value outside the component.
    console.warn(this.eSalaryForm.value);
  }

  constructor(private fb: FormBuilder) { }

  ngOnInit() {
  }

}
