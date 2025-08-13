import { NgModule } from "@angular/core";
import { InputComponent } from "./input-component/input-component";
import { ResultsComponent } from "./results-component/results-component";
import { App } from "./app";
import { HeaderComponent } from "./header-component/header-component";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";

@NgModule({
    declarations:[App,HeaderComponent,InputComponent,ResultsComponent],
    bootstrap:[App],
    imports:[FormsModule,BrowserModule]
})
export class AppModule {

}