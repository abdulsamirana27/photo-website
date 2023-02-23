import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CalendarModule} from "primeng/calendar";

const module = [
  CalendarModule,
]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...module
  ],
  exports:[...module]
})
export class PrimengModule { }
