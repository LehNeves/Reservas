import { Component } from '@angular/core';
import { NavController , ViewController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';


@IonicPage()

@Component({
  selector: 'page-tabs-controller',
  templateUrl: 'tabs-controller.html'
})
export class TabsControllerPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  
  tab1Root: string = 'HomePage';
  tab2Root: string = 'RestaurantesPage';
  tab3Root: string = 'ReservasPage';
  tab4Root: string = 'PerfilPage';
  constructor(public navCtrl: NavController, public viewCtrl: ViewController) {
  
  }

}
