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

@Component({
  selector: 'app-registro-vacina-detalhes',
  templateUrl: './registro-vacina-detalhes.component.html',
  styleUrls: ['./registro-vacina-detalhes.component.css']
})
export class RegistroVacinaDetalhesComponent implements OnInit {

  registroVacina = new RegistroVacina
  vacina = new Vacina
  especie = new EspecieBovideo
  rebanho = new Rebanho
  propriedade = new Propriedade

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
    this.get()
  }

  get(){
    const id = Number(this.route.snapshot.paramMap.get('id'))

    this.service.GetId(id).subscribe(
      data => {
        this.registroVacina = data
        this.getVacina(data.id_vacina)
        this.getRebanho(data.id_rebanho)
        console.log(data)
        
      }
    )
  }

  getVacina(id:number){
    this.VacinaService.GetId(id).subscribe(
      data => {
        this.vacina = data
      }
    )
  }

  getRebanho(id:number){
    this.rebanhoService.GetId(id).subscribe(
      data => {
        this.rebanho = data
        this.getEspecie(data.id_especie)
        this.getPropriedade(data.id_propriedade)
      }
    )
  }

  getPropriedade(id:number){
    this.propriedadeService.GetId(id).subscribe(
      data => this.propriedade = data
    )
  }

  getEspecie(id:number){
    this.especieService.GetId(id).subscribe(
      data => {
        this.especie = data
      }
    )
  }

  voltar(){
    this.location.back()
  }

}
