import { Injectable } from "@angular/core";
import { Investment } from "../model/investment.model";


@Injectable({providedIn: 'root'})
export class InvestmentService {


    calculateInvestmentResults( annualInvestment:number , duration:number, expectedReturn: number, initialInvestment: number): Investment[] {
        const annualData: Investment[] = [];
        let investmentValue = initialInvestment;
        for (let i = 0; i < duration; i++) {
            const year = i + 1;
            const interestEarnedInYear = investmentValue * (expectedReturn / 100);
            investmentValue += interestEarnedInYear + annualInvestment;
            const totalInterest =
              investmentValue - annualInvestment * year - initialInvestment;
            annualData.push({
              year: year,
              interest: interestEarnedInYear,
              valueEndOfYear: investmentValue,
              annualInvestment: annualInvestment,
              totalInterest: totalInterest,
              totalAmountInvested: initialInvestment + annualInvestment * year,
            });
          }
          return annualData;
    }

}