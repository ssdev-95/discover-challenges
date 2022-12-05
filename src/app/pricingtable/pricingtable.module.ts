import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PricingtableComponent } from './pricingtable.component';
import { PricingcardComponent } from './pricingcard/pricingcard.component';



@NgModule({
  declarations: [
    PricingtableComponent,
    PricingcardComponent
  ],
  imports: [
    CommonModule
  ]
})
export class PricingtableModule { }
