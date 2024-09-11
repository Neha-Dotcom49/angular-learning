import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-assign',
  templateUrl: './reactive-assign.component.html',
  styleUrls: ['./reactive-assign.component.css']
})
export class ReactiveAssignComponent implements OnInit {
  myReactiveForm!: FormGroup;
  existingNames: string[] = ['Codemind', 'JohnDoe', 'JaneSmith'];
  genders: string[] = ['Male', 'Female', 'Other'];
  selectedCountry: string | null = null;
  countries = [
    { id: '1', name: 'India' },
    { id: '2', name: 'USA' },
    { id: '3', name: 'UK' }
  ];
  countryPhoneFormats = {
    '1': /^\d{10}$/,           // India: 10 digits
    '2': /^\d{3}-\d{3}-\d{4}$/, // USA: XXX-XXX-XXXX
    '3': /^\d{5} \d{6}$/       // UK: XXXXX XXXXXX
  };
  constructor(private _fb: FormBuilder) {
    this.createForm();
   }

  ngOnInit(): void {
  }

  createForm() 
  {
    this.myReactiveForm = this._fb.group({
      firstName: ['Neha Patil', [Validators.required, Validators.minLength(5), Validators.maxLength(25), Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/), this.uniqueNameValidator.bind(this)]],
      date: ['', Validators.required],
      gender: [null, Validators.required],
      country: ['', Validators.required],
      phoneNumber: ['', [Validators.required, this.phoneValidator.bind(this)]],
      bio: ['', [Validators.maxLength(256)]],
      acceptTerms: [false, Validators.requiredTrue],
      userName: ['', [Validators.required, Validators.minLength(5), Validators.maxLength(25), Validators.pattern(/^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]+$/), this.uniqueNameValidator.bind(this)]],
      password: ['', [Validators.required, Validators.minLength(5), Validators.pattern(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]/)]],
      confirmPassword: ['', Validators.required]
    }, { validator: this.checkPasswordMatch }); // Apply at FormGroup level
  }

  checkPasswordMatch(group: FormGroup): ValidationErrors | null {
    const password = group.get('password')?.value;
    const confirmPassword = group.get('confirmPassword')?.value;

    return password && confirmPassword && password !== confirmPassword
      ? { 'mismatch': true }
      : null;
  }

  uniqueNameValidator(control: FormControl): ValidationErrors | null {
    const firstName = control.value as string;
    if (this.existingNames.includes(firstName)) {
      return { 'nameNotUnique': true };
    }
    return null;
  }

  phoneValidator(control: FormControl): ValidationErrors | null {
    const selectedCountryId = this.myReactiveForm?.get('country')?.value as '1' | '2' | '3';
    const phoneFormat = this.countryPhoneFormats[selectedCountryId];
    
    if (phoneFormat && control.value && !phoneFormat.test(control.value)) {
      return { 'invalidPhone': true };
    }
    return null;
  }
  
}