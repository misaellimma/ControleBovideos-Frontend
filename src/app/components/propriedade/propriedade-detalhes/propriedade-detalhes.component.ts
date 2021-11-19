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
  selector: 'app-propriedade-detalhes',
  templateUrl: './propriedade-detalhes.component.html',
  styleUrls: ['./propriedade-detalhes.component.css']
})
export class PropriedadeDetalhesComponent implements OnInit {

  produtor:Produtor = {
    id: 0,
    id_endereco: 0,
    nome: "",
    cpf: ""
  }

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
  constructor(
    private service: PropriedadeService,
    private produtorservice: ProdutorService,
    private municipioService:MunicipioService,
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
  voltar(){
    this.location.back()
  }
}
