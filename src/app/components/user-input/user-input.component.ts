import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-input',
  standalone: false,
  templateUrl: './user-input.component.html',
  styleUrl: './user-input.component.css'
})
export class UserInputComponent{
    annualInvestment: number = 0;
    duration: number = 0;
    expectedReturn: number = 0;
    initialInvestment: number = 0;
   
  onSubmit() {
    
  }
    

}
