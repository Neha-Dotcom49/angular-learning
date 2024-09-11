import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-country-state',
  templateUrl: './country-state.component.html',
  styleUrls: ['./country-state.component.css']
})
export class CountryStateComponent implements OnInit {
  countries = ['USA', 'India'];  // Added two new countries
  states: any[] = [
    { country: 'USA', states: ['California', 'Florida', 'New York'] },
    { country: 'India', states: ['MadhyPradesh', 'Maharashtra', 'Karnataka'] },
   
  ];

  selectedCountry: string = '';
  stateOptions: string[] = [];
  selectedState: string = '';

  constructor() { }

  ngOnInit(): void {
  }

  onCountryChange() {
    const countryData = this.states.find(countryData => countryData.country === this.selectedCountry);
    this.stateOptions = countryData ? countryData.states : [];  //condition ? expr1 : expr2
    this.selectedState = ''; // To Clear selected state when country changes
  }
}
