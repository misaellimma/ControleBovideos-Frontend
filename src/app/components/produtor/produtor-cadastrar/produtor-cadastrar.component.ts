import { Component, Input, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Endereco } from 'src/app/models/endereco';
import { Municipio } from 'src/app/models/municipio';
import { Produtor } from 'src/app/models/produtor';
import { EnderecoService } from 'src/app/services/endereco.service';
import { MunicipioService } from 'src/app/services/municipio.service';
import { ProdutorService } from 'src/app/services/produtor.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-produtor-cadastrar',
  templateUrl: './produtor-cadastrar.component.html',
  styleUrls: ['./produtor-cadastrar.component.css']
})
export class ProdutorCadastrarComponent implements OnInit {

  submitted:boolean = false
  validaNome:boolean = false
  validaMunicipio:boolean = false
  validaRua:boolean = false
  validaNumero:boolean = false
  validaCpf:boolean = false
  
  msgValidaNome:string = ""
  msgValidaMunicipio:string = ""
  msgValidaRua:string = ""
  msgValidaNumero:string = ""
  msgValidaCpf:string = ""
  cpfForm:string = ""
  
  municipios: Municipio[] = []
  
  produtor = new Produtor()
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
    private router:Router,
    private location: Location
  ) {

   }

  ngOnInit(): void {
    sessionStorage.setItem("reload", "true")
    this.getMunicipio()
  }

  getMunicipio(){
    this.municipioService.get().subscribe(data => this.municipios = data)
  }

  save(){
    if(this.validaForm()){
      this.postEndereco()
      this.voltar()
    }
  }

  postEndereco(){
    this.endereco.id_municipio = Number(this.endereco.id_municipio)
    this.endereco.numero = String(this.endereco.numero)
    this.enderecoService.Add(this.endereco).subscribe(
      resp => {
        this.PostProdutor(Number(resp.id))
      }
    )
  }

  PostProdutor(id:number){
    this.produtor.id_endereco = id
    this.service.Add(this.produtor).subscribe(
      resp => console.log(resp),
      error => {console.log(error)
      }
    )
  }

  validaForm():boolean{

    this.validaNome = false
    this.validaMunicipio = false
    this.validaRua = false
    this.validaNumero = false

    let valida = true
    if(this.validaCpf){
      this.msgValidaCpf = "Campo obrigatorio!"
      valida = false
    }

    if(this.produtor.nome == ""  || this.produtor.nome.length < 3){
      this.validaNome = true
      this.msgValidaNome = "Campo obrigatorio!"
      valida = false
    }

    if(this.produtor.nome.length < 3 || this.produtor.nome.length > 255){
      this.validaNome = true
      this.msgValidaNome = "O campo deve ter entre de 3 a 255 caracteres"
      valida = false
    }

    if(this.produtor.cpf == "")
    {
      this.validaCpf = true
      this.msgValidaCpf = "Campo obrigatorio!"
      valida = false
    }

    if(this.endereco.numero == ""){
      this.validaNumero = true
      this.msgValidaNumero = "Campo obrigatorio!"
      valida = false
    }

    if(this.endereco.id_municipio == 0){
      this.validaMunicipio = true
      this.msgValidaMunicipio = "Campo obrigatorio!"
      valida = false
    }

    if(this.endereco.rua == ""){
      this.validaRua = true
      this.msgValidaRua = "Campo obrigatorio!"
      valida = false
    }
    return valida
  }

  verificaCpf(){
    this.validaCpf = false
    
    if(this.produtor.cpf.length > 0){
      this.service.ValidaCpf(this.produtor.cpf).subscribe(
        data => {},
        error => {
          this.validaCpf = true
          this.msgValidaCpf = error.error
        })
      }
  }

  voltar(){
    setTimeout(() => {
      this.location.back()
    }, 500);
  }
}
