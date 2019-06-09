import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';
import { RestauranteService } from '../../services/domain/restaurante.service';
import { RestauranteDTO } from '../../models/restaurante.dto';
import {Data} from './restaurante.service';

@IonicPage()
@Component({
  selector: 'page-restaurantes',
  templateUrl: 'restaurantes.html'
})
export class RestaurantesPage {
 //items: RestauranteDTO[];
 jsonData : any;
 searchTerm : any="";
  constructor(
    public navCtrl: NavController,
    public restauranteService: RestauranteService, public data : Data) {}

  ionViewDidLoad() {
    this.setFilteredItems();
    /*this.setFilteredItems();
    this.restauranteService.findAll()
    .subscribe(response =>{
      this.items = response;
    },
    error => {});*/
  }

 
  
 setFilteredItems() {
 
  this.jsonData = this.data.filterItems(this.searchTerm);

}

}
