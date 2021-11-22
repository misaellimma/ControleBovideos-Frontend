import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Produtor } from 'src/app/models/produtor';
import { Propriedade } from 'src/app/models/propriedade';
import { ProdutorService } from 'src/app/services/produtor.service';
import { PropriedadeService } from 'src/app/services/propriedade.service';

@Component({
  selector: 'app-produtor',
  templateUrl: './produtor.component.html',
  styleUrls: ['./produtor.component.css']
})
export class ProdutorComponent implements OnInit {

  mostrar:boolean = false
  produtores:Produtor[] = []
  form:FormGroup
  cpf:any
  errorMessage = ""
  erro :boolean = false
  propriedades:Propriedade[] = []
  constructor(
    private service:ProdutorService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      cpf: ['', Validators.required]
    })
   }

  ngOnInit(): void {
  }
  getAll(){
    this.service.get().subscribe(
      data => {
        this.produtores = data
        if(this.produtores.length != 0){
          this.mostrar = true
        }else{
          this.erro = true
          this.errorMessage = "Não existe produtor cadastrado!"
        }
      })
  }

  

  getCpf(cpf:string){
    this.produtores = []
    this.service.GetCpf(cpf).subscribe(
      data => {
        this.produtores.push(data)
        this.mostrar = true
      },
      error => {
        this.errorMessage = error.error,
        this.erro = true
      })
  }

  onSubmit(){
    this.mostrar = false
    this.erro = false
    this.cpf = this.form.value
    if(this.form.invalid){
      this.getAll()
    }else{
      this.getCpf(this.cpf.cpf)    
    }
  }
}
