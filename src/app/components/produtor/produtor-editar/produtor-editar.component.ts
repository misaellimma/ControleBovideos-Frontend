import { Component, Input, OnInit } from '@angular/core';
import { Produtor } from 'src/app/models/produtor';
import { EnderecoService } from 'src/app/services/endereco.service';
import { MunicipioService } from 'src/app/services/municipio.service';
import { ProdutorService } from 'src/app/services/produtor.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Endereco } from 'src/app/models/endereco';
import { Municipio } from 'src/app/models/municipio';
import { Location } from '@angular/common';

@Component({
  selector: 'app-produtor-editar',
  templateUrl: './produtor-editar.component.html',
  styleUrls: ['./produtor-editar.component.css']
})
export class ProdutorEditarComponent implements OnInit {
  
  validaNome:boolean = false
  validaMunicipio:boolean = false
  validaRua:boolean = false
  validaNumero:boolean = false
  
  msgValidaNome:string = ""
  msgValidaMunicipio:string = ""
  msgValidaRua:string = ""
  msgValidaNumero:string = ""
  
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

  municipios:Municipio[] = []
  
  constructor(
    private service: ProdutorService,
    private municipioService:MunicipioService,
    private enderecoService:EnderecoService,
    private router: Router,
    private location: Location,
    private route: ActivatedRoute
  ) {  }

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
  }

  getEndereco(id:number){
    this.enderecoService.GetId(id).subscribe(
      data => {
        this.endereco = data
        this.getMunicipio(data.id_municipio)
    })
    this.getMunicipios()
  }
  getMunicipio(id: number){
    this.municipioService.GetId(id).subscribe(data => this.municipio = data)
  }

  getMunicipios(){
    this.municipioService.get().subscribe(data => this.municipios = data)
  }

  save(){
    const id = Number(this.route.snapshot.paramMap.get('id'))
    if(this.validaForm()){
      this.PutEndereco(this.produtor.id_endereco,this.endereco)
      this.PutProdutor(id, this.produtor)
      this.voltar()
    }
  }

  PutEndereco(id:number, endereco:Endereco){
    endereco.numero = String(endereco.numero)
    this.enderecoService.Update(id, endereco).subscribe(data => console.log(data)
    )
  }

  PutProdutor(id:number, produtor:Produtor){
    this.service.Update(id, produtor).subscribe(data => console.log(data)
    )
  }

  voltar(){
    this.location.back()
  }

  validaForm():boolean{

    this.validaNome = false
    this.validaMunicipio = false
    this.validaRua = false
    this.validaNumero = false

    let valida = true

    if(this.produtor.nome == ""){
      this.validaNome = true
      this.msgValidaNome = "Campo obrigatorio!"
      valida = false
    }
    console.log(this.endereco.numero + "aa");
    
    if(this.endereco.numero == "null" || this.endereco.numero == ""){
      this.validaNumero = true
      this.msgValidaNumero = "Campo obrigatorio!"
      valida = false
    }

    if(this.endereco.id_municipio == 0){
      this.validaMunicipio = true
      this.msgValidaMunicipio = "Campo obrigatorio!"
      valida = false
    }

    if(this.endereco.rua == ""){
      this.validaRua = true
      this.msgValidaRua = "Campo obrigatorio!"
      valida = false
    }
    return valida
  }
}
