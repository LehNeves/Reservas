import { IonicPageModule } from 'ionic-angular/module';
import { NgModule } from '@angular/core';
import { TabsControllerPage } from './tabs-controller';




@NgModule({
 declarations: [TabsControllerPage],
 imports: [IonicPageModule.forChild(TabsControllerPage)]
})
export class HomeModule {
}