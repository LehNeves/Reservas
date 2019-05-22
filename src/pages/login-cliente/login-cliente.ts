import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CadastroPage } from '../cadastro/cadastro';
import { TabsControllerPage } from '../tabs-controller/tabs-controller';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';

@IonicPage()

@Component({
  selector: 'page-login-cliente',
  templateUrl: 'login-cliente.html'
})
export class LoginClientePage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController) {
  }
  goToCadastro(params){
    if (!params) params = {};
    this.navCtrl.push(CadastroPage);
  }goToHome(params){
    if (!params) params = {};
    this.navCtrl.push(TabsControllerPage);
  }
} 
