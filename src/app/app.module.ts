import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CalculatorComponent } from './components/calculator/calculator/calculator.component';
import { ButtonComponent } from './components/buttons/button/button.component';
import { FunctionBtnComponent } from './components/buttons/funBtn/function-btn/function-btn.component';

import { OperationBtnComponent } from './components/buttons/opBtn/operation-btn/operation-btn.component';
import { DisplayComponent } from './components/display/display/display.component';
import { NumericBtnComponent } from './components/buttons/numBtn/numeric-btn/numeric-btn.component';
import { BackendService } from './services/backend.service';
import { HttpClient, HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    CalculatorComponent,
    ButtonComponent,
    FunctionBtnComponent,
    NumericBtnComponent,
    OperationBtnComponent,
    DisplayComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [BackendService],
  bootstrap: [AppComponent]
})
export class AppModule { }
