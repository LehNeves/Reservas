import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';
import { CredenciaisDTO } from '../../models/credenciais.dto';
import { AuthService } from '../../services/auth.service';

@IonicPage()

@Component({
  selector: 'page-login-cliente',
  templateUrl: 'login-cliente.html'
})
export class LoginClientePage {

  creds : CredenciaisDTO = {
    email: "",
    senha: ""
  };

  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(public navCtrl: NavController,
    public authSevice: AuthService,
    ) {
  }
  goToCadastro(params){
    if (!params) params = {};
    this.navCtrl.push('EscolheCadastroPage');
  }

  login(){
    this.authSevice.autenticate(this.creds).subscribe(response => {
      
      let perfil = this.authSevice.successfulLogin(response.headers.get('Authorization'), response.headers.get('Perfil'));
      
      perfil = perfil.replace("[ROLE_", "",).replace("]", "");
      
      if (perfil === "CLIENTE") {
        this.navCtrl.setRoot('TabsControllerPage');
      } else if (perfil === "RESTAURANTE") {
        console.log("RESTAURANTE");
      } else if (perfil === "ADMIN") {
        console.log("ADMIN");
      }

      }, 
      error => {})
  }
} 
