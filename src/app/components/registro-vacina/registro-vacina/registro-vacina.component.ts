import { Component, OnInit } from '@angular/core';
import { Propriedade } from 'src/app/models/propriedade';
import { RegistroVacina } from 'src/app/models/registrovacina';
import { RegistroVacinaOut } from 'src/app/models/registroVacinaOut';
import { ProdutorService } from 'src/app/services/produtor.service';
import { PropriedadeService } from 'src/app/services/propriedade.service';
import { RegistrovacinaService } from 'src/app/services/registrovacina.service';

@Component({
  selector: 'app-registro-vacina',
  templateUrl: './registro-vacina.component.html',
  styleUrls: ['./registro-vacina.component.css']
})
export class RegistroVacinaComponent implements OnInit {

  mostrar:boolean = false
  validaInscricao:boolean = false
  
  msgValidaInscricao = ""

  propriedade = new Propriedade
  registroVacinas: RegistroVacinaOut[] = []

  constructor(
    private service:RegistrovacinaService,
    private propriedadeService:PropriedadeService,
  ) { }

  ngOnInit(): void {
    if(sessionStorage.getItem("reload") == "true"){
      window.location.reload()
      sessionStorage.setItem("reload", "false")
    }
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
          this.get(data.id)
        },
        error => {
          this.msgValidaInscricao = error.error,
          this.validaInscricao = true
        })
    }
  }

  get(id:number){
    this.service.GetPropriedade(id).subscribe(
      data =>{
        this.registroVacinas = data
        if(this.registroVacinas.length > 0){
          this.mostrar = true
        }else{
          this.validaInscricao = true
          this.msgValidaInscricao = "Sem registros de vacinação!"
        }        
      }
    )
  }

}
