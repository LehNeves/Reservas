import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';
import { ReservasService } from '../../services/domain/reservas.service';
import { ReservasDTO } from '../../models/reservas.dto';

@IonicPage()
@Component({
  selector: 'page-reservas',
  templateUrl: 'reservas.html'
})
export class ReservasPage {
  items: ReservasDTO[];

  constructor(public navCtrl: NavController,
     public reservasService: ReservasService) {
  }
  
  ionViewDidLoad() {
    this.reservasService.findAll()
    .subscribe(response =>{
      this.items = response;
    },
    error => {});
  }
}
