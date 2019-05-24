import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';
import { RestauranteService } from '../../services/domain/restaurante.service';
import { RestauranteDTO } from '../../models/restaurante.dto';

@IonicPage()
@Component({
  selector: 'page-restaurantes',
  templateUrl: 'restaurantes.html'
})
export class RestaurantesPage {
 items: RestauranteDTO[];
  constructor(
    public navCtrl: NavController,
    public restauranteService: RestauranteService) {}

  ionViewDidLoad() {
    this.restauranteService.findAll()
    .subscribe(response =>{
      this.items = response;
    },
    error => {});
  }
}
