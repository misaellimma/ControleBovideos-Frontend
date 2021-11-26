import { DatePipe, formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Propriedade } from 'src/app/models/propriedade';
import { Rebanho } from 'src/app/models/rebanho';
import { RegistroVacina } from 'src/app/models/registrovacina';
import { Vacina } from 'src/app/models/vacina';
import { PropriedadeService } from 'src/app/services/propriedade.service';
import { RebanhoService } from 'src/app/services/rebanho.service';
import { RegistrovacinaService } from 'src/app/services/registrovacina.service';
import { VacinaService } from 'src/app/services/vacina.service';
import { Location } from '@angular/common';


@Component({
  selector: 'app-registro-vacina-cadastrar',
  templateUrl: './registro-vacina-cadastrar.component.html',
  styleUrls: ['./registro-vacina-cadastrar.component.css']
})
export class RegistroVacinaCadastrarComponent implements OnInit {

  mostrar:boolean = false
  validaInscricao:boolean = false
  validaRebanho:boolean = false
  validaVacina:boolean = false
  validaData:boolean = false
  validaQtde:boolean = false
  erro:boolean = false
  
  msgValidaInscricao = ""
  msgValidaRebanho = ""
  msgValidaVacina = ""
  msgValidaData = ""
  msgValidaQtde = ""
  msgErro = ""
  
  
  propriedade = new Propriedade
  registroVacina = new RegistroVacina

  rebanhos:Rebanho[] = []
  vacinas:Vacina[] = []

  constructor(
    private service:RegistrovacinaService,
    private rebanhoService:RebanhoService,
    private vacinaService:VacinaService,
    private location: Location, 
    private propriedadeService:PropriedadeService,
  ) { }

  ngOnInit(): void {
    sessionStorage.setItem("reload", "true")
    this.getVacina()
  }

  getInscricao(){
    this.validaInscricao = false
    
    if(this.propriedade.inscricao_estadual == ""){
      this.validaInscricao = true
      this.msgValidaInscricao = "O campo não deve estar vazio!"
    }else{
      this.propriedadeService.GetInscricao(this.propriedade.inscricao_estadual).subscribe(
        data => {
          this.propriedade = data
          this.getRebanhos(data.id)
        },
        error => {
          this.msgValidaInscricao = error.error,
          this.validaInscricao = true
        })
    }
  }

  getRebanhos(id:number){
    this.rebanhoService.GetPropriedade(id).subscribe(
      data => {
        this.rebanhos = data
      }
    )
  }

  getVacina(){
    this.vacinaService.get().subscribe(
      data => {
        this.vacinas = data
      }
    )
  }

  save(){
    console.log(this.registroVacina);
    
    if(this.validaForm()){
      this.postRegistro()
    }
  }
  
  postRegistro(){
    this.registroVacina.id_rebanho = Number(this.registroVacina.id_rebanho)
    this.registroVacina.id_vacina = Number(this.registroVacina.id_vacina)

    this.service.Add(this.registroVacina).subscribe(
      data => {
        this.voltar()
      },
      error =>{
        this.erro = true
        this.msgErro = error.error
      }
    )
  }

  voltar(){
    setTimeout(() => {
      this.location.back()
    }, 500);
  }

  validaForm():boolean{
  
    this.validaRebanho = false
    this.validaVacina = false
    this.validaQtde = false
    this.validaData = false

    let valida = true
    if(this.validaInscricao){
      this.msgValidaInscricao = "Campo obrigatorio!"
      valida = false
    }

    if(this.propriedade.inscricao_estadual == "")
    {
      this.validaInscricao = true
      this.msgValidaInscricao = "Campo obrigatorio!"
      valida = false
    }

    if(this.registroVacina.data == "")
    {
      this.validaData = true
      this.msgValidaData = "Campo obrigatorio!"
      valida = false
    }

    if(this.registroVacina.id_rebanho == 0)
    {
      this.validaRebanho = true
      this.msgValidaRebanho = "Campo obrigatorio!"
      valida = false
    }

    if(this.registroVacina.id_vacina == 0){
      this.validaVacina = true
      this.msgValidaVacina = "Campo obrigatorio!"
      valida = false
    }

    if(this.registroVacina.qtde_vacinado == null){
      this.validaQtde = true
      this.msgValidaQtde = "Campo obrigatorio!"
      valida = false
    }

    if(this.registroVacina.qtde_vacinado < 1){
      this.validaQtde = true
      this.msgValidaQtde = "Não deve ser menor que 1!"
      valida = false
    }

    return valida
  }

}
