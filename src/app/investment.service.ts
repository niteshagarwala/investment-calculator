import { Injectable } from "@angular/core";
import { TypeInputData } from "./input-component/input-component.model";
import { TypeResultsData } from "./results-component/results-component.model";

@Injectable({providedIn:'root'})
export class InvestmentService
{

  annualOutputData !: TypeResultsData[];
    
  calculate(inputData : TypeInputData)
  {

  const annualData = [];
  let investmentValue = Number(inputData.initialInvesment);

  for (let i = 0; i < Number(inputData.duration); i++) 
  {
    const year = i + 1;
    const interestEarnedInYear = investmentValue * (Number(inputData.interestRate) / 100);
    investmentValue += interestEarnedInYear + Number(inputData.annualInvesment);
    const totalInterest =
    investmentValue - Number(inputData.annualInvesment) * year - Number(inputData.initialInvesment);
   
    annualData.push({
      year: year,
      interest: interestEarnedInYear,
      valueEndOfYear: investmentValue,
      annualInvestment: Number(inputData.annualInvesment),
      totalInterest: totalInterest,
      totalAmountInvested: Number(inputData.initialInvesment) + Number(inputData.annualInvesment) * year,
    });
  }

  this.annualOutputData = annualData;
  }
}