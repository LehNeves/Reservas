import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { CidadeService } from '../../services/domain/cidade.service';
import { EstadoService } from '../../services/domain/estado.service';
import { EstadoDTO } from '../../models/estado.dto';
import { CidadeDTO } from '../../models/cidade.dto';
import { ClienteService } from '../../services/domain/cliente.service';

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html'
})
export class CadastroPage {
 
  formGroup: FormGroup;
  estados: EstadoDTO[];
  cidades: CidadeDTO[];

  constructor(public navCtrl: NavController,
    public formBuilder: FormBuilder,
    public cidadeService: CidadeService,
    public estadoService: EstadoService,
    public clienteService: ClienteService,
    public alertCtrl: AlertController,
    ) {
      this.formGroup = this.formBuilder.group({
        nome: ['', [Validators.required]],
        email: ['', [Validators.required]],
        cpf: ['', [Validators.required]],
        senha: ['', [Validators.required]],
        logradouro: ['', [Validators.required]],
        numero: ['', [Validators.required]],
        complemento: ['', [Validators.required]],
        bairro: ['', [Validators.required]],
        cep: ['', [Validators.required]],
        estadoId : [null, [Validators.required]],
        cidadeId : [null, [Validators.required]],
        ddd: ['', [Validators.required]],
        telefone: ['', [Validators.required]]
      })
  }

  ionViewDidLoad(){
    this.estadoService.findAll()
      .subscribe(response =>{
        this.estados = response;
        this.formGroup.controls.estadoId.setValue(this.estados[0].id);
        this.updateCidades();
        console.log(this.estados);
      },
      error =>{});
  }

  updateCidades(){
    let estado_Id = this.formGroup.value.estadoId;
    this.cidadeService.findAll(estado_Id)
    .subscribe(response => {
      this.cidades = response;
      this.formGroup.controls.cidadeId.setValue(null);
    },
    error =>{});
  }

  cadastroUsuario(){
    console.log(this.formGroup.value);
    this.clienteService.insert(this.formGroup.value)
      .subscribe(response => {
        this.showInsertOk();
      },
     error =>{})
  }

  showInsertOk(){
    let alert = this.alertCtrl.create({
      title: 'Sucesso!',
      message: 'Cadastro efetuado com sucesso',
      enableBackdropDismiss: false,
      buttons: [
        {
          text: 'Ok',
          handler:() => {
            this.navCtrl.pop();
          }
        }
      ]
    });
    alert.present();
  }
}
