import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LayoutRoutingModule } from './layout-routing.module';
import { LayoutComponent } from './layout.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import {FormsModule} from "@angular/forms";
import {PrimengModule} from "../shared/primeng/primeng.module";
import {AuthModule} from "../auth/auth.module";
import {CarouselModule} from "primeng/carousel";
import { ViewComponent } from './view/view.component';
import {CardModule} from "primeng/card";


@NgModule({
  declarations: [
    LayoutComponent,
    HeaderComponent,
    FooterComponent,
    ViewComponent
  ],
    imports: [
        CommonModule,
        FormsModule,
        PrimengModule,
        LayoutRoutingModule,
        AuthModule,
        CarouselModule,
        CardModule
    ]
})
export class LayoutModule { }
