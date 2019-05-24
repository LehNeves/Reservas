import { IonicPageModule } from 'ionic-angular/module';
import { NgModule } from '@angular/core';
import { CadastroPage } from './cadastro';
import { CidadeService } from '../../services/domain/cidade.service';
import { EstadoService } from '../../services/domain/estado.service';

@NgModule({
 declarations: [CadastroPage],
 imports: [IonicPageModule.forChild(CadastroPage)],
 providers: [
     CidadeService,
     EstadoService
 ]
})
export class HomeModule {
}