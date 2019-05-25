import { Component } from '@angular/core';
import { NavController, AlertController } from 'ionic-angular';
import { IonicPage } from 'ionic-angular/navigation/ionic-page';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

import { ClienteService } from '../../services/domain/cliente.service';

@IonicPage()
@Component({
  selector: 'page-cadastro',
  templateUrl: 'cadastro.html'
})
export class CadastroPage {
 
  formGroup: FormGroup;
  

  constructor(public navCtrl: NavController,
    public formBuilder: FormBuilder,
    public clienteService: ClienteService,
    public alertCtrl: AlertController,
    ) {
      this.formGroup = this.formBuilder.group({
        nome: ['', [Validators.required]],
        email: ['', [Validators.required]],
        cpf: ['', [Validators.required]],
        senha: ['', [Validators.required]],
        //logradouro: ['', [Validators.required]],
        //numero: ['', [Validators.required]],
        //complemento: ['', [Validators.required]],
        //bairro: ['', [Validators.required]],
        //cep: ['', [Validators.required]],
        //estadoId : ['', [Validators.required]],
        //cidadeId : ['', [Validators.required]],
        ddd: ['', [Validators.required]],
        telefone: ['', [Validators.required]]
      })
  }

  /*ionViewDidLoad(){
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
  }*/

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
            this.navCtrl.push('LoginClientePage');
          }
        }
      ]
    });
    alert.present();
  }
}
