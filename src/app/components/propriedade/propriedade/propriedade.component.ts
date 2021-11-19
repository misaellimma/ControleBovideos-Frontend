import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Produtor } from 'src/app/models/produtor';
import { Propriedade } from 'src/app/models/propriedade';
import { ProdutorService } from 'src/app/services/produtor.service';
import { PropriedadeService } from 'src/app/services/propriedade.service';

@Component({
  selector: 'app-propriedade',
  templateUrl: './propriedade.component.html',
  styleUrls: ['./propriedade.component.css']
})
export class PropriedadeComponent implements OnInit {

  ocultar:boolean = false
  propriedades = [{
    id: 0,
    id_produtor: 0,
    nome_produtor: "",
    incricao_estadual: "",
    nome_propriedade: ""
  }]
  produtor:Produtor = {
    id:0,
    id_endereco: 0,
    nome: "",
    cpf:""
  }
  form:FormGroup
  inscricao:any
  errorMessage = ""
  erro :boolean = false
  //propriedades:Propriedade[] = []
  
  constructor(
    private service:ProdutorService,
    private propriedadeService:PropriedadeService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      inscricao: ['', Validators.required]
    })
   }

  ngOnInit(): void {
  }

  getInscricao(inscricao:string){
    this.propriedades = []
    this.propriedadeService.GetInscricao(inscricao).subscribe(
      data => {
        this.propriedades.push(data)
        this.ocultar = true
      },
      error => {
        this.errorMessage = error.error,
        this.erro = true
      })
  }

  getAll(){
    this.propriedadeService.get().subscribe(
      data => {
        this.propriedades = data
        this.ocultar = true
      })
    
  }

  getProdutor(id:number){
    this.service.GetId(id).subscribe(
      data => {
        this.produtor = data
      })
    return this.produtor.nome
  }

  onSubmit(){
    this.ocultar = false
    this.erro = false
    this.inscricao = this.form.value
    if(this.form.invalid){
      this.getAll()
    }else{
      this.getInscricao(this.inscricao.inscricao)    
    }
  }
}
