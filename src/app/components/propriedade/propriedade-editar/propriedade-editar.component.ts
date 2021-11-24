import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { MunicipioService } from 'src/app/services/municipio.service';
import { PropriedadeService } from 'src/app/services/propriedade.service';
import { Location } from '@angular/common';
import { Propriedade } from 'src/app/models/propriedade';
import { Municipio } from 'src/app/models/municipio';

@Component({
  selector: 'app-propriedade-editar',
  templateUrl: './propriedade-editar.component.html',
  styleUrls: ['./propriedade-editar.component.css']
})
export class PropriedadeEditarComponent implements OnInit {

  propriedade = new Propriedade

  municipio:Municipio = {
    id: 0,
    nome: ""
  }

  municipios:Municipio[] = []

  validaNome:boolean = false
  validaMunicipio:boolean = false
  msgValidaNome = ""
  msgValidaMunicipio = ""

  constructor(
    private service: PropriedadeService,
    private municipioService:MunicipioService,
    private location: Location, 
    private router: Router,
    private route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    sessionStorage.setItem("reload", "true")
    this.get()
    this.getMunicipios()
  }

  get(){
    const id = Number(this.route.snapshot.paramMap.get('id'))

    this.service.GetId(id).subscribe(
      data => {
        this.propriedade = data
        this.getMunicipio(data.id_municipio)
      })
  }

  getMunicipio(id:number){
    this.municipioService.GetId(id).subscribe(
      data => {
        this.municipio = data
      })
  }

  getMunicipios(){
    this.municipioService.get().subscribe(
      data => {
        this.municipios = data
      })
  }
  
  voltar(){
    setTimeout(() => {
      this.location.back()
    }, 500);
  }

  save(){
    const id = Number(this.route.snapshot.paramMap.get('id'))
    if(this.validaForm()){
      this.update(id, this.propriedade)
      this.voltar()
    }
  }

  update(id: number, propriedade:Propriedade){
    this.service.Update(id, this.propriedade).subscribe(
      data => console.log(data),
      error => console.log(error)
    )
  }

  validaForm():boolean{
    let valida = true
    
    this.validaMunicipio = false
    this.validaNome = false

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
