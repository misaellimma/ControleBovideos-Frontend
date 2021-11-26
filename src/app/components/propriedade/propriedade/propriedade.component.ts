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

  mostrar:boolean = false
  produtor = new Produtor()
  form:FormGroup
  inscricao:any
  errorMessage = ""
  erro :boolean = false
  propriedades:Propriedade[] = []
  
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
    if(sessionStorage.getItem("reload") == "true"){
      window.location.reload()
      sessionStorage.setItem("reload", "false")
    }
    this.getAll("onload")
  }

  getInscricao(inscricao:string){
    this.propriedades = []
    this.propriedadeService.GetInscricao(inscricao).subscribe(
      data => {
        this.propriedades.push(data)
        this.mostrar = true
      },
      error => {
        this.errorMessage = error.error,
        this.erro = true
      })
  }

  getAll(str:any){
    this.propriedadeService.get().subscribe(
      data => {
        this.propriedades = data
        if(this.propriedades.length > 0){
          this.mostrar = true
        }else{
          if(str == "onload"){
            this.erro = false
          }else{
            this.erro = true
            this.errorMessage = "Não existe propriedade cadastrada"
          }
        }
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
    this.mostrar = false
    this.erro = false
    this.inscricao = this.form.value
    if(this.form.invalid){
      this.getAll("pesquisar")
    }else{
      this.getInscricao(this.inscricao.inscricao)    
    }
  }
}
