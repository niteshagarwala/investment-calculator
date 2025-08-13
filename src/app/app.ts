import { Component, Input, signal } from '@angular/core';
import { HeaderComponent } from "./header-component/header-component";
import { InputComponent } from "./input-component/input-component";
import { TypeInputData } from './input-component/input-component.model';
import { TypeResultsData } from './results-component/results-component.model';
import { ResultsComponent } from "./results-component/results-component";

@Component({
  selector: 'app-root',
  standalone:false,
  templateUrl: './app.html',
  styleUrl: './app.css'
})

export class App 
{
  protected readonly title = signal('investment-calculator'); 
 
}
