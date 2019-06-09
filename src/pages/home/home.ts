import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';
import { CategoriaService } from '../../services/domain/categoria.service';
import { CategoriaDTO } from '../../models/categorias.dto';
import { ViewChild } from '@angular/core';
import { RestauranteService } from '../../services/domain/restaurante.service';
import { RestauranteDTO } from '../../models/restaurante.dto';

@IonicPage()

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  
})
export class HomePage {
  @ViewChild('mySlider') mySlider: any;

  slideChanged() {
    this.mySlider.slideTo(1, 2000);
  }

  goToSlide() {
    this.mySlider.slideTo(2, 500);
  }
  items: CategoriaDTO[];
  rest: RestauranteDTO[];

  constructor(
    public navCtrl: NavController,
    public categoriaService: CategoriaService,
    public restauranteService: RestauranteService) {}

  ionViewDidLoad() {
    this.categoriaService.findAll()
    .subscribe(response =>{
      this.items = response;
    },
    error => {});
    
    this.restauranteService.findAll()
    .subscribe(response =>{
      this.rest = response;
    },
    error => {});
  }
}
