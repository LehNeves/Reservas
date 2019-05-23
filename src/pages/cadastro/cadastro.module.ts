import { IonicPageModule } from 'ionic-angular/module';
import { NgModule } from '@angular/core';
import { CadastroPage } from './cadastro';

@NgModule({
 declarations: [CadastroPage],
 imports: [IonicPageModule.forChild(CadastroPage)]
})
export class HomeModule {
}