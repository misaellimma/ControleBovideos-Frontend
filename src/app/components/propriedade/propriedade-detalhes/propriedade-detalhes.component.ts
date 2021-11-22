import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Municipio } from 'src/app/models/municipio';
import { Produtor } from 'src/app/models/produtor';
import { Propriedade } from 'src/app/models/propriedade';
import { MunicipioService } from 'src/app/services/municipio.service';
import { ProdutorService } from 'src/app/services/produtor.service';
import { PropriedadeService } from 'src/app/services/propriedade.service';
import { Location } from '@angular/common';
import { RebanhoService } from 'src/app/services/rebanho.service';
import { Rebanho } from 'src/app/models/rebanho';

@Component({
  selector: 'app-propriedade-detalhes',
  templateUrl: './propriedade-detalhes.component.html',
  styleUrls: ['./propriedade-detalhes.component.css']
})
export class PropriedadeDetalhesComponent implements OnInit {

  mostrar:boolean = false
  produtor = new Produtor()

  propriedade:Propriedade = {
    id: 0,
    id_produtor: 0,
    id_municipio: 0,
    nome_propriedade: "",
    incricao_estadual: ""
  }

  municipio:Municipio = {
    id: 0,
    nome: ""
  }

  rebanho:Rebanho[] = []
  constructor(
    private service: PropriedadeService,
    private produtorservice: ProdutorService,
    private municipioService:MunicipioService,
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
        this.propriedade = data
        
        this.getProdutor(data.id_produtor)
        this.getMunicipio(data.id_municipio)
      })
      this.getRebanho(id)
  }

  getProdutor(id:number){
    this.produtorservice.GetId(id).subscribe(
      data => {
        this.produtor = data
      })
  }

  getMunicipio(id:number){
    this.municipioService.GetId(id).subscribe(
      data => {
        this.municipio = data
      })
  }

  getRebanho(id: number){
    this.rebanhoService.GetPropriedade(id).subscribe(
      data => {
        this.rebanho = data
      if(this.rebanho.length != 0){
        this.mostrar = true
      }}
    )
  }
  voltar(){
    this.location.back()
  }
}
