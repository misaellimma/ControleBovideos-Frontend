import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { RegistrovacinaService } from 'src/app/services/registrovacina.service';
import { RegistroVacina } from 'src/app/models/registrovacina';
import { ActivatedRoute } from '@angular/router';
import { Vacina } from 'src/app/models/vacina';
import { VacinaService } from 'src/app/services/vacina.service';
import { EspecieBovideoService } from 'src/app/services/especie-bovideo.service';
import { EspecieBovideo } from 'src/app/models/especieBovideo';
import { Rebanho } from 'src/app/models/rebanho';
import { RebanhoService } from 'src/app/services/rebanho.service';
import { Propriedade } from 'src/app/models/propriedade';
import { PropriedadeService } from 'src/app/services/propriedade.service';
import { RegistroVacinaOut } from 'src/app/models/registroVacinaOut';

@Component({
  selector: 'app-registro-vacina-detalhes',
  templateUrl: './registro-vacina-detalhes.component.html',
  styleUrls: ['./registro-vacina-detalhes.component.css']
})
export class RegistroVacinaDetalhesComponent implements OnInit {

  registroVacina = new RegistroVacinaOut
  vacina = new Vacina
  especie = new EspecieBovideo
  rebanho = new Rebanho
  propriedade = new Propriedade
  erro:boolean = false
  msgErro = ""

  constructor(
    private service:RegistrovacinaService,
    private VacinaService:VacinaService,
    private especieService:EspecieBovideoService,
    private propriedadeService:PropriedadeService,
    private rebanhoService:RebanhoService,
    private location: Location,
    private route: ActivatedRoute

  ) { }

  ngOnInit(): void {
    sessionStorage.setItem("reload", "true")
    this.get()
  }

  get(){
    const id = Number(this.route.snapshot.paramMap.get('id'))

    this.service.GetId(id).subscribe(
      data => {
        this.registroVacina = data
        console.log(data)
        
      }
    )
  }

  delete(){
    this.erro = false
    const id = Number(this.route.snapshot.paramMap.get('id'))

    this.service.Delete(id).subscribe(
      data => {
        console.log(data);
        
      },
      error => {
        this.msgErro = error.error
        this.erro = true
      }
    )
  }

  voltar(){
    setTimeout(() => {
      this.location.back()
    }, 500);
  }

}
