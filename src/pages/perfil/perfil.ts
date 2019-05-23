import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { IonicPage } from 'ionic-angular/navigation/ionic-page';

@IonicPage()
@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html'
})
export class PerfilPage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToLoginCliente(params){
    if (!params) params = {};
    this.navCtrl.setRoot('LoginClientePage');
  }goToCadastro(params){
    if (!params) params = {};
    this.navCtrl.push('CadastroPage');
  }goToHome(params){
    if (!params) params = {};
    this.navCtrl.push('HomePage');
  }
}
