import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EspecieBovideo } from 'src/app/models/especieBovideo';
import { Propriedade } from 'src/app/models/propriedade';
import { Rebanho } from 'src/app/models/rebanho';
import { EspecieBovideoService } from 'src/app/services/especie-bovideo.service';
import { PropriedadeService } from 'src/app/services/propriedade.service';
import { RebanhoService } from 'src/app/services/rebanho.service';
import { Produtor } from 'src/app/models/produtor';
import { ProdutorService } from 'src/app/services/produtor.service';

@Component({
  selector: 'app-animal-cadastrar',
  templateUrl: './animal-cadastrar.component.html',
  styleUrls: ['./animal-cadastrar.component.css']
})
export class AnimalCadastrarComponent implements OnInit {
  especies:EspecieBovideo[] = []
  propriedades:Propriedade[] = []

  produtor = new Produtor
  rebanho = new Rebanho

  validaPropriedade:boolean = false
  validaEspecie:boolean = false
  validaCpf:boolean = false
  validaQtdeAnimais:boolean = false
  erro :boolean = false

  msgValidaPropriedade:string = ""
  msgValidaEspecie:string = ""
  msgValidaCpf:string = ""
  msgValidaQtdeAnimais:string = ""
  errorMessage = ""


  constructor(
    private service:RebanhoService,
    private especieService:EspecieBovideoService,
    private propriedadeService:PropriedadeService,
    private location: Location,
    private produtorService: ProdutorService
  ) {}

  ngOnInit(): void {
    sessionStorage.setItem("reload", "true")
    this.getEspecie()
  }

  getEspecie(){
    this.especieService.get().subscribe(data => this.especies = data)
  }

  getPropriedades(id:number){
    this.propriedadeService.GetProdutor(id).subscribe(data => this.propriedades = data)
  }

  getCpf(){
    this.validaCpf = false
    if(this.produtor.cpf == ""){
      return
    }else{
    this.produtorService.GetCpf(this.produtor.cpf).subscribe(
      data => {
        this.produtor = data        
        this.getPropriedades(Number(data.id))
      },
      error => {
        this.msgValidaCpf = error.error        
        this.validaCpf = true
      })
    }
  }

  save(){
    if(this.validaForm()){
      this.postRebanho()
      this.voltar()
    }

  }

  postRebanho(){
    this.rebanho.id_especie = Number(this.rebanho.id_especie)
    this.rebanho.id_propriedade = Number(this.rebanho.id_propriedade)
    this.service.Add(this.rebanho).subscribe(
      data => {
      },
      error => {
        console.log(error)
      }
    )
  }

  voltar(){
    setTimeout(() => {
      this.location.back()
    }, 500);
  }

  validaForm():boolean{

    this.validaPropriedade = false
    this.validaEspecie = false
    this.validaQtdeAnimais = false

    let valida = true
    if(this.validaCpf){
      this.msgValidaCpf = "Campo obrigatorio!"
      valida = false
    }

    if(this.rebanho.id_especie == 0){
      this.validaEspecie = true
      this.msgValidaEspecie = "Campo obrigatorio!"
      valida = false
    }

    if(this.produtor.cpf == "")
    {
      this.validaCpf = true
      this.msgValidaCpf = "Campo obrigatorio!"
      valida = false
    }

    if(this.rebanho.id_propriedade == 0){
      this.validaPropriedade = true
      this.msgValidaPropriedade = "Campo obrigatorio!"
      valida = false
    }

    if(this.rebanho.qtde_total == null){
      this.validaQtdeAnimais = true
      this.msgValidaQtdeAnimais = "Campo obrigatorio!"
      valida = false
    }

    if(this.rebanho.qtde_total < 1 ){
      this.validaQtdeAnimais = true
      this.msgValidaQtdeAnimais = "N??o deve ser menor que 1!"
      valida = false
    }

    return valida
  }
}

