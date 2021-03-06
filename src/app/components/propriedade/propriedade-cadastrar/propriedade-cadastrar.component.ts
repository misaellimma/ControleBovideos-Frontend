import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Municipio } from 'src/app/models/municipio';
import { Produtor } from 'src/app/models/produtor';
import { Propriedade } from 'src/app/models/propriedade';
import { MunicipioService } from 'src/app/services/municipio.service';
import { ProdutorService } from 'src/app/services/produtor.service';
import { PropriedadeService } from 'src/app/services/propriedade.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-propriedade-cadastrar',
  templateUrl: './propriedade-cadastrar.component.html',
  styleUrls: ['./propriedade-cadastrar.component.css']
})
export class PropriedadeCadastrarComponent implements OnInit {

  ocultar:boolean = false
  validaCpf:boolean = false
  validaInscricao:boolean = false
  validaNome:boolean = false
  validaMunicipio:boolean = false
  
  msgValidaCpf = ""
  msgValidaInscricao = ""
  msgValidaNome = ""
  msgValidaMunicipio = ""

  produtor = new Produtor
  propriedade = new Propriedade

  municipios:Municipio[] = []
  constructor(
    private service:PropriedadeService,
    private municipiosService:MunicipioService,
    private location: Location, 
    private route: ActivatedRoute,
    private produtorService:ProdutorService
  ) { }

  ngOnInit(): void {
    sessionStorage.setItem("reload", "true")
    this.getMunicipios()
  }

  verificaCpf(){
    this.validaCpf = false

    if(this.produtor.cpf.length > 0){
      this.produtorService.GetCpf(this.produtor.cpf).subscribe(
        data => this.produtor = data,
        error => {
          this.msgValidaCpf = error.error
          this.validaCpf = true
        })
      }
  }

  verificaInscricao(){
    this.validaInscricao = false
    
    if(this.propriedade.inscricao_estadual.length > 0){
      this.service.GetValidaInscricao(this.propriedade.inscricao_estadual).subscribe(
        data => {
        },
        error => {
          this.msgValidaInscricao = error.error
          this.validaInscricao = true
        })
      }
  }

  getMunicipios(){
    this.municipiosService.get().subscribe(
      data => this.municipios = data
    )
  }

  save(){
    if(this.validaForm()){
      this.propriedade.id_produtor = this.produtor.id
      this.propriedade.id_municipio = Number(this.propriedade.id_municipio)

      this.Post(this.propriedade)
      this.voltar()
    }
  }

  voltar(){
    setTimeout(() => {
      this.location.back()
    }, 500);
  }

  Post(propriedade: Propriedade){
    this.service.Add(propriedade).subscribe(
      data => {}
      )
  }
  
  validaForm():boolean{
    
    this.validaInscricao = false
    this.validaMunicipio = false
    this.validaNome = false
    this.validaCpf = false

    let valida = true
    if(this.validaCpf){
      this.msgValidaCpf = "Campo obrigatorio!"
      valida = false
    }

    if(this.validaInscricao ){
      this.msgValidaInscricao = "Campo obrigatorio!"
      valida = false
    }

    if(this.produtor.cpf == "")
    {
      this.validaCpf = true
      this.msgValidaCpf = "Campo obrigatorio!"
      valida = false
    }

    if(this.propriedade.inscricao_estadual == ""){
      this.validaInscricao = true
      this.msgValidaInscricao = "Campo obrigatorio!"
      valida = false
    }

    if(this.propriedade.id_municipio == 0){
      this.validaMunicipio = true
      this.msgValidaMunicipio = "Campo obrigatorio!"
      valida = false
    }

    if(this.propriedade.nome_propriedade.length == 0){
      this.validaNome = true
      this.msgValidaNome = "Campo obrigatorio!"
      valida = false
    }
    return valida
  }
}
