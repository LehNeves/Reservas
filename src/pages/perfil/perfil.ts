import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { IonicPage } from 'ionic-angular/navigation/ionic-page';
import { StorageService } from '../../services/storage.service';
import { ClienteDTO } from '../../models/cliente.dto';
import { ClienteService } from '../../services/domain/cliente.service';
import { AuthService } from '../../services/auth.service';

@IonicPage()

@Component({
  selector: 'page-perfil',
  templateUrl: 'perfil.html'
})
export class PerfilPage {
  cliente: ClienteDTO;

  constructor(public navCtrl: NavController,
     public storage: StorageService,
     public clienteService: ClienteService,
     public auth: AuthService) {}

  ionViewDidLoad(){
    let localUser = this.storage.getLocalUser();
    if (localUser && localUser.email){
      this.clienteService.findByEmail(localUser.email)
      .subscribe(response => {
        this.cliente = response;
      
      },
      error =>{
        if(error.status == 403) {
          this.navCtrl.setRoot('LoginClientePage');
        }
      });
    }
    else{
      this.navCtrl.setRoot('LoginClientePage');
    }
  }
  sair() {
    this.auth.logout();
    this.navCtrl.setRoot('TabsControllerPage');
  }
}
