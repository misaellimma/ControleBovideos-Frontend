import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { ActivatedRoute, Router } from '@angular/router';
import { Endereco } from 'src/app/models/endereco';
import { Municipio } from 'src/app/models/municipio';
import { Produtor } from 'src/app/models/produtor';
import { EnderecoService } from 'src/app/services/endereco.service';
import { MunicipioService } from 'src/app/services/municipio.service';
import { ProdutorService } from 'src/app/services/produtor.service';
import { Propriedade } from 'src/app/models/propriedade';
import { PropriedadeService } from 'src/app/services/propriedade.service';

@Component({
  selector: 'app-produtor-detalhes',
  templateUrl: './produtor-detalhes.component.html',
  styleUrls: ['./produtor-detalhes.component.css']
})
export class ProdutorDetalhesComponent implements OnInit {

  produtor = new Produtor()

  endereco:Endereco = {
    id: 0,
    id_municipio: 0,
    numero:"",
    rua: ""
  }

  municipio:Municipio = {
    id: 0,
    nome: ""
  }
  propbool:boolean = false
  propriedades:Propriedade[] = []

  constructor(
    private service: ProdutorService,
    private municipioService:MunicipioService,
    private enderecoService:EnderecoService,
    private propriedadeService:PropriedadeService,
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
        this.produtor = data
        this.getEndereco(data.id_endereco)
      })
      this.getPropriedades(id)
  }

  getEndereco(id:number){
    this.enderecoService.GetId(id).subscribe(
      data => {
        this.endereco = data
        this.getMunicipio(data.id_municipio)
    })
  }
  getMunicipio(id: number){
    this.municipioService.GetId(id).subscribe(data => this.municipio = data)
  }

  getPropriedades(id:number){
    this.propriedadeService.GetProdutor(id).subscribe(
      data => {
        this.propriedades = data
        if(data.length > 0){
          this.propbool = true
        }
      }
    )
  }

  voltar(){
    setTimeout(() => {
      this.location.back()
    }, 500);
  }
}
