import { Component } from '@angular/core';
import { Validators,FormGroup, FormControl,ReactiveFormsModule } from '@angular/forms';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-form',
  standalone: true,
  imports: [ReactiveFormsModule, NgIf],
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})
export class FormComponent {
  form = new FormGroup({
    firstName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    lastName: new FormControl('', [Validators.required, Validators.minLength(2)]),
    country: new FormControl('', [Validators.required, Validators.minLength(5)]),
    note: new FormControl('', [Validators.required, Validators.minLength(10)]),
  });

  handleSubmit(){
    console.warn(this.form.value);
  }

  handleReset(){
    this.firstName?.setValue("")
    this.lastName?.setValue("")
    this.country?.setValue("")
    this.note?.setValue("")
  }

  get firstName() {
    return this.form.get('firstName');
  }

  get lastName() {
    return this.form.get('lastName');
  }
  get country(){
    return this.form.get('country')
  }
  get note(){
    return this.form.get('note')
  }

}
