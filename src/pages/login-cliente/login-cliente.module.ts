import { IonicPageModule } from 'ionic-angular/module';
import { NgModule } from '@angular/core';
import { LoginClientePage } from './login-cliente';
@NgModule({
 declarations: [LoginClientePage],
 imports: [IonicPageModule.forChild(LoginClientePage)]
})
export class HomeModule {
}