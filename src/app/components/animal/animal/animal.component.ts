import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EspecieBovideo } from 'src/app/models/especieBovideo';
import { Produtor } from 'src/app/models/produtor';
import { Propriedade } from 'src/app/models/propriedade';
import { Rebanho } from 'src/app/models/rebanho';
import { RebanhoOut } from 'src/app/models/rebanhoOut';
import { EspecieBovideoService } from 'src/app/services/especie-bovideo.service';
import { ProdutorService } from 'src/app/services/produtor.service';
import { PropriedadeService } from 'src/app/services/propriedade.service';
import { RebanhoService } from 'src/app/services/rebanho.service';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {

  ocultar:boolean = false
  erro:boolean = false
  errorMessage = ""
  cpf = ""

  produtor = new Produtor
  rebanhos: RebanhoOut[] = []
  constructor(
    private service:RebanhoService,
    private produtorService:ProdutorService,
    private rebanhoService:RebanhoService,
    private propriedadeService:PropriedadeService
  ) { }

  ngOnInit(): void {
    if(sessionStorage.getItem("reload") == "true"){
      window.location.reload()
      sessionStorage.setItem("reload", "false")
    }
  }

  getCpf(){
    this.erro = false
    this.ocultar = false
    if(this.validaForm()){
      this.produtorService.GetCpf(this.cpf).subscribe(
        data => {
          this.produtor = data
          this.getRebanho(data.id)
        },
        error => {
          console.log(error);
          this.errorMessage = error.error,
          this.erro = true
        })
    }
  }

  validaForm():boolean{
    let valida = true
    if(this.cpf == ""){
      this.errorMessage = "O campo não pode estar vazio!"
      this.erro = true
      valida = false
    }
    return valida
  }
  
  getRebanho(id:number){
    this.rebanhoService.GetProdutor(id).subscribe(
      data => {
        this.rebanhos = data
        if(this.rebanhos.length != 0){
          console.log(data);
          this.ocultar = true
        }else{
          this.erro = true
          this.errorMessage = "Não existe rebanho cadastrado para esse produtor!"
        }
        
      })
  }
}
