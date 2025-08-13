import { Component, inject, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TypeInputData } from './input-component.model';
import { InvestmentService } from '../investment.service';

@Component({
  selector: 'app-input-component',
  standalone:false,
  templateUrl: './input-component.html',
  styleUrl: './input-component.css'
})
export class InputComponent {

 private investmentService = inject(InvestmentService);

inputData : TypeInputData = {
  initialInvesment : "0.00",
  annualInvesment : "0.00",
  interestRate : "6.00",
  duration : "5.00"
};

  onSubmit()
  {
    this.investmentService.calculate(this.inputData);
  }
}
