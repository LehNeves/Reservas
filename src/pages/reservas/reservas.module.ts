import { IonicPageModule } from 'ionic-angular/module';
import { NgModule } from '@angular/core';
import { ReservasPage } from './reservas';


@NgModule({
 declarations: [ReservasPage],
 imports: [IonicPageModule.forChild(ReservasPage)]
})
export class HomeModule {
}