import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-simpleform',
  templateUrl: './simpleform.component.html',
  styleUrls: ['./simpleform.component.css']
})
export class SimpleformComponent implements OnInit {
  birthDate!: Date;
  age! : number | undefined;
  selectedGender: string = '2';
  genders = [
    {value: '1', viewValue: 'Male'},
    {value: '2', viewValue: 'Female'},
  ]

  

  countries = [
    {countryId:1, name: "India"},
    {countryId:2, name: "Australia"},
  ]
  states = [
    {id: 1, name: "Maharashtra", countryId: 1},
    {id: 2, name: "Gujrat", countryId: 1},
    {id: 3, name: "Victoria", countryId: 2},
    {id: 4, name: "New South Wales", countryId: 2},
  ]
  filteredStates : any[] = [];
  selectedCountryId = null;
    // Inject the Demo service 
  // who is responsible to provide the Dependency ans: Angular 
  constructor(private _demoService: DemoService) { }

  ngOnInit(): void {
  }

//   onSubmit(form:NgForm){
// console.log('TDF',form);

//   }


onSubmit(form: any): void {
  if (form.valid) {
    console.log('Form Value:', form.value);
    form.reset();
  } else {
    console.log('Form is invalid');
  }
}

resetForm(form: any){
  form.reset({
    gender: this.selectedGender, // Reset gender to default value
    country: null,
    state: null,
    date: null,
    age: null
  });
}

  checkPasswordMatch(form: NgForm) {
     // Ensure both controls are available
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
  
  onCountryChange(event: any) {
    if (this.selectedCountryId) {
     this.filteredStates = this.states.filter(state => state.countryId == this.selectedCountryId);
    } else {
      this.filteredStates = [];
    }
  }
  // calculateAge() {
  //   // create the instance DemoService class 
  //   const objDemoService = new DemoService();
  //   this.age = objDemoService.calculateAge(this.birthDate)
  // }
  calculateAge() {
    // create the instance DemoService class 
    this.age = this._demoService.calculateAge(this.birthDate)
  }

}
