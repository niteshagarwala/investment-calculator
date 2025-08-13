import { Component, computed, inject, input, Input } from '@angular/core';
import { TypeResultsData } from './results-component.model';
import { CurrencyPipe } from '@angular/common';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-results-component',
  standalone:false,
  templateUrl: './results-component.html',
  styleUrl: './results-component.css'
})
export class ResultsComponent {

private investmentService =inject(InvestmentService);

get outputData() {
  return this.investmentService.annualOutputData;
}

}