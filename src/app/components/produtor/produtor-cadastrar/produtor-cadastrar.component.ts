import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Location } from '@angular/common';
import { Endereco } from 'src/app/models/endereco';
import { Municipio } from 'src/app/models/municipio';
import { Produtor } from 'src/app/models/produtor';
import { EnderecoService } from 'src/app/services/endereco.service';
import { MunicipioService } from 'src/app/services/municipio.service';
import { ProdutorService } from 'src/app/services/produtor.service';

@Component({
  selector: 'app-produtor-cadastrar',
  templateUrl: './produtor-cadastrar.component.html',
  styleUrls: ['./produtor-cadastrar.component.css']
})
export class ProdutorCadastrarComponent implements OnInit {

  produtor:Produtor
  submitted:boolean = false

  validaCpf:boolean = false
  msgValidaCpf:string = ""
  cpfForm:string = ""

  municipios: Municipio[] = []
  form: FormGroup

  endereco:Endereco = {
    id: 0,
    id_municipio: 0,
    rua: '',
    numero:''
  }

  constructor(
    private service: ProdutorService,
    private municipioService:MunicipioService,
    private enderecoService:EnderecoService,
    private location: Location, 
    private formBuilder: FormBuilder
  ) {
    this.produtor = new Produtor();
    this.form = this.formBuilder.group({
      nome:['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(255),
      ]],
      cpf:['', Validators.required],
      id_municipio:['', Validators.required],
      rua:['', [
        Validators.required,
        Validators.minLength(3),
        Validators.maxLength(255)
      ]],
      numero:['', Validators.required]
    })
   }

  ngOnInit(): void {
    
    this.getMunicipio()
  }

  getMunicipio(){
    this.municipioService.get().subscribe(data => this.municipios = data)
  }

  onSubmit(){
    if(this.form.invalid || this.validaCpf){
      return
    }
    let temp = this.form.value
    
    this.endereco.id_municipio = Number(temp.id_municipio)
    this.endereco.rua = String(temp.rua)
    this.endereco.numero = String(temp.numero)
    this.produtor.nome = String(temp.nome)
    this.produtor.cpf = String(temp.cpf)
    
    this.postEndereco()
  }

  postEndereco(){
    this.enderecoService.Add(this.endereco).subscribe(
      resp => {
        this.PostProdutor(Number(resp.id))
      },
      error => console.log(error)
    )
  }

  PostProdutor(id:number){
    this.produtor.id_endereco = id
    this.service.Add(this.produtor).subscribe(
      resp => console.log(resp),
      error => {console.log(error)
      }
    )
    this.voltar()
  }

  verificaCpf(){
    this.validaCpf = false
    let cpf = this.form.value
    this.cpfForm = cpf.cpf
    
    if(this.cpfForm.length > 0){
      this.service.ValidaCpf(cpf.cpf).subscribe(
        data => console.log(data),
        error => {
          console.log(error)
          this.msgValidaCpf = error.error
          this.validaCpf = true
        })
      }
  }

  get f():{[key: string]:AbstractControl}{
    return this.form.controls
  }

  voltar(){
    this.location.back()
  }
}
