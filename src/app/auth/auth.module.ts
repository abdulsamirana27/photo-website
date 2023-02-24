import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {FormsModule} from "@angular/forms";
import {PrimengModule} from "../shared/primeng/primeng.module";
import {AuthComponent} from "./auth.component";
import {AuthRoutingModule} from "./auth-routing.module";
import { SignInComponent } from './sign-in/sign-in.component';
import { SignupComponent } from './signup/signup.component';
import { ForgotPasswordComponent } from './forgot-password/forgot-password.component';


@NgModule({
    declarations: [
        AuthComponent,
        SignInComponent,
        SignupComponent,
        ForgotPasswordComponent
    ],
    exports: [
        SignInComponent
    ],
    imports: [
        CommonModule,
        FormsModule,
        PrimengModule,
        AuthRoutingModule
    ]
})
export class AuthModule { }
