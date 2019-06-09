import { ClienteDTO } from './../../models/cliente.dto';
import { ClienteService } from './../../services/domain/cliente.service';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';
import { ReservasService } from '../../services/domain/reservas.service';
import { ReservasDTO } from '../../models/reservas.dto';
import { StorageService } from '../../services/storage.service';

@IonicPage()

@Component({
  selector: 'page-reservas',
  templateUrl: 'reservas.html'
})
export class ReservasPage {
  items: ReservasDTO[];
  private cliente : ClienteDTO;

  constructor(public navCtrl: NavController,
     public reservasService: ReservasService,
     public clienteService : ClienteService,
     public storage : StorageService
  ) {
  }
  
  ionViewDidLoad() {
    let localUser = this.storage.getLocalUser();
    this.clienteService.findByEmail(localUser.email)
    .subscribe(response =>{
      this.cliente = response;
      this.reservasService.findReserva(this.cliente.id)
        .subscribe(response =>{
          this.items = response;
          console.log(this.items);
      },
      error => {});
    },
    error => {});
    
    
  }
}
