import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Produtor } from 'src/app/models/produtor';
import { ProdutorService } from 'src/app/services/produtor.service';

@Component({
  selector: 'app-produtor',
  templateUrl: './produtor.component.html',
  styleUrls: ['./produtor.component.css']
})
export class ProdutorComponent implements OnInit {

  ocultar:boolean = false
  produtores:Produtor[] = []
  form:FormGroup
  cpf:any
  errorMessage = ""
  erro :boolean = false
  constructor(
    private service:ProdutorService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      cpf: ['', Validators.required]
    })
   }

  ngOnInit(): void {
    this.getAll()
  }
  getAll(){
    this.service.get().subscribe(
      data => {
        this.produtores = data, 
        this.ocultar = true
      })
  }

  getCpf(cpf:string){
    this.produtores = []
    this.service.GetCpf(cpf).subscribe(
      data => {
        this.produtores.push(data)
        this.ocultar = true
      },
      error => {
        this.errorMessage = error.error,
        this.erro = true
      })

  }

  onSubmit(){
    this.ocultar = false
    this.erro = false
    this.cpf = this.form.value
    if(this.form.invalid){
      this.getAll()
    }else{
      this.getCpf(this.cpf.cpf)    
    }
  }
}
