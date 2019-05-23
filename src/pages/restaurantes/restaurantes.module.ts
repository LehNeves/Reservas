import { IonicPageModule } from 'ionic-angular/module';
import { NgModule } from '@angular/core';
import { RestaurantesPage } from './restaurantes';




@NgModule({
 declarations: [RestaurantesPage],
 imports: [IonicPageModule.forChild(RestaurantesPage)]
})
export class HomeModule {
}