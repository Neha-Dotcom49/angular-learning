import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-tdf-assign',
  templateUrl: './tdf-assign.component.html',
  styleUrls: ['./tdf-assign.component.css']
})
export class TdfAssignComponent implements OnInit {
  cities = ['Mumbai', 'Kolkata', 'Delhi'];
  genders = [
    {value: '1', viewValue: 'Male'},
    {value: '2', viewValue: 'Female'},
  ]

  checkPasswordMatch(form: NgForm) {
    //ensure both controls are available
    const password = form.controls['password'];
    const confirmPassword = form.controls['confirmPassword'];
    if (password && confirmPassword) {
      // Check if passwords match
      if (password.value !== confirmPassword.value) {
        // Set a custom error when passwords do not match
        confirmPassword.setErrors({ mismatch: true });
      } else {
        // Clear the custom error when passwords match
        confirmPassword.setErrors(null);
      }
    }
  }

  constructor() { }

  ngOnInit(): void {
  }
  onSubmit(form: NgForm) {
    if (form.valid) {
      console.log(form.value);

        // Reset the form after successful submission
    form.resetForm();

    } else {
      console.log('Form is invalid');
  
      // Mark all fields as touched to display error messages
      Object.keys(form.controls).forEach(key => {
        const control = form.controls[key];
        control.markAsTouched(); // Mark as touched to show errors
      });
      
    }
  }
  

}
