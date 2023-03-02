import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CalendarModule} from "primeng/calendar";
import { CarouselModule } from 'primeng/carousel';
import { CardModule } from 'primeng/card';

const module = [
  CalendarModule,
  CarouselModule,
  CardModule
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
