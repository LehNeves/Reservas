import { Component } from '@angular/core';
import { NavController, App } from 'ionic-angular';

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
     public auth: AuthService, private app: App) {}

  ionViewDidLoad(){
    let localUser = this.storage.getLocalUser();
    if (localUser && localUser.email){
      this.clienteService.findByEmail(localUser.email)
      .subscribe(response => {
        this.cliente = response;
      
      },
      error =>{
        if(error.status == 403) {
          this.app.getRootNav().setRoot('LoginClientePage');
        }
      });
    }
    else{
      this.app.getRootNav().setRoot('LoginClientePage');
    }
  }
  sair() {
    this.auth.logout();
    this.app.getRootNav().setRoot('LoginClientePage');
  }
}
