import { Component, inject, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { InvestmentService } from '../../services/investment.service';
import { Investment } from '../../model/investment.model';

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
    investmentService = inject(InvestmentService)
    showResults = false
    results!: Investment[]
  onSubmit() {
    if(this.annualInvestment > 0 && this.duration > 0 && this.expectedReturn > 0 && this.initialInvestment>0) {
        this.results = this.investmentService.calculateInvestmentResults(this.annualInvestment, this.duration, this.expectedReturn, this.initialInvestment);
        this.showResults = true;
    }
  }
    

}
