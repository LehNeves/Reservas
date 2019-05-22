import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HomePage } from '../home/home';
import { RestaurantesPage } from '../restaurantes/restaurantes';
import { ReservasPage } from '../reservas/reservas';
import { PerfilPage } from '../perfil/perfil';

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  tab1Root: any = HomePage;
  tab2Root: any = RestaurantesPage;
  tab3Root: any = ReservasPage;
  tab4Root: any = PerfilPage;
  constructor(public navCtrl: NavController) {
  }
  
}
