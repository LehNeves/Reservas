import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
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
    this.navCtrl.push('CadastroPage');
  }
  login(){
    this.navCtrl.setRoot('TabsControllerPage');
  }
} 
