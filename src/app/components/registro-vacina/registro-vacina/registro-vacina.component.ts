import { Component, OnInit } from '@angular/core';
import { Propriedade } from 'src/app/models/propriedade';
import { RegistroVacina } from 'src/app/models/registrovacina';
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
  registroVacinas: RegistroVacina[] = []

  constructor(
    private service:RegistrovacinaService,
    private propriedadeService:PropriedadeService,
  ) { }

  ngOnInit(): void {
  }

  getInscricao(){
    this.validaInscricao = false
    console.log(this.propriedade);
    
    if(this.propriedade.incricao_estadual == ""){
      this.validaInscricao = true
      this.msgValidaInscricao = "O campo não deve estar vazio!"
    }else{
      this.propriedadeService.GetInscricao(this.propriedade.incricao_estadual).subscribe(
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
          this.msgValidaInscricao = "Sem registros de vacinação"
        }
        console.log(data);
        
      }
    )
  }

}
