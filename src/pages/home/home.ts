import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';
import { CategoriaService } from '../../services/domain/categoria.service';

@IonicPage()

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  // this tells the tabs component which Pages
  // should be each tab's root Page
  constructor(
    public navCtrl: NavController,
    public categoriaService: CategoriaService
    ) {
    
  }

  ionViewDidLoad() {
    this.categoriaService.findAll().subscribe(response =>{
      console.log(response);
    },
    error => {
      console.log(error);
    });
  }
}
