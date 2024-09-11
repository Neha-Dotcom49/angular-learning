import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
@Component({
  selector: 'app-reactiveform',
  templateUrl: './reactiveform.component.html',
  styleUrls: ['./reactiveform.component.css']
})
export class ReactiveformComponent implements OnInit {
  myReactiveForm!: FormGroup; //  We have declare property .
  selectedCountryId :string="India";
  countries: string[] = [ 'India', 'Canada', 'Australia', 'USA', 'UK',
    'Germany', 'France', 'Italy', 'Spain', 'Brazil',
    'China', 'Japan', 'South Korea', 'Russia', 'South Africa',
    'Mexico', 'Argentina', 'New Zealand', 'Singapore', 'UAE',
    'Netherlands', 'Sweden', 'Switzerland', 'Belgium', 'Norway',
    'Denmark', 'Finland', 'Ireland', 'Portugal', 'Greece'];
  constructor(private _fb: FormBuilder) { 
    this.createForm();
    // // set value example 
    // setTimeout(() => {
    //   this.myReactiveForm.setValue({
    //     'firstName': 'Codemind',
    //     'lastName' : 'Technology',
    //     'skills': ['Angular']
    //   });
    // }, 5000);
    // patchValue example
    setTimeout(() => {
      this.myReactiveForm.patchValue({
        'firstName': 'Codemind',
        'lastName' : 'Technology'
      });
    }, 5000);
  }

  ngOnInit(): void {
  }
  createForm()
  {
    // this.myReactiveForm = new FormGroup({
    //   firstName: new FormControl('', [Validators.required, Validators.minLength(3), this.FirstNameNotAllowed] ),
    //   lastName: new FormControl('', [Validators.required, Validators.minLength(3)]),
    //   skills: new FormArray([
    //     new FormControl('')
    //   ]),
    //   country: new FormControl(this.selectedCountryId)
      
    // })
    this.myReactiveForm = this._fb.group({
      firstName: ['', [Validators.required, Validators.minLength(3), this.FirstNameNotAllowed] ],
      lastName: [''],
      skills: this._fb.array([new FormControl]),
      // country: this._fb.array([])
      country: this._fb.control(this.selectedCountryId)
    })
  }
  onSubmit() {
    alert('Form submitted successfully......!!!');
    console.log(this.myReactiveForm.value);
    this.myReactiveForm.reset()
  }
  get skills() {
    return this.myReactiveForm.get('skills') as FormArray;
  }
  
  OnAddSkills() {
    this.skills.push(new FormControl);
  }
  removeSkill(index: number) {
    this.skills.removeAt(index);
}
FirstNameNotAllowed(control: FormControl) : ValidationErrors | null {
  console.log('FirstNameNotAllowed', control.value); // Amrishpuri
  
  const nameNotAllowed = ['Amrishpuri', 'Tatya Vinchu', 'Danny'];
  const firstName = control.value as string; // Jack // we have typescast control value into string 
  if (nameNotAllowed.indexOf(firstName) !== -1) {
    
    return {'firstNameNotAllowed': true}
  }
  return null;
  
}


}
