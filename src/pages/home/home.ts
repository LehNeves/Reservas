import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';
import { CategoriaService } from '../../services/domain/categoria.service';
import { CategoriaDTO } from '../../models/categorias.dto';

@IonicPage()

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})
export class HomePage {
  items: CategoriaDTO[];

  constructor(
    public navCtrl: NavController,
    public categoriaService: CategoriaService) {}

  ionViewDidLoad() {
    this.categoriaService.findAll()
    .subscribe(response =>{
      this.items = response;
    },
    error => {});
  }
}
