import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { EspecieBovideo } from 'src/app/models/especieBovideo';
import { Propriedade } from 'src/app/models/propriedade';
import { Rebanho } from 'src/app/models/rebanho';
import { EspecieBovideoService } from 'src/app/services/especie-bovideo.service';
import { PropriedadeService } from 'src/app/services/propriedade.service';
import { RebanhoService } from 'src/app/services/rebanho.service';

@Component({
  selector: 'app-animal',
  templateUrl: './animal.component.html',
  styleUrls: ['./animal.component.css']
})
export class AnimalComponent implements OnInit {

  especies:EspecieBovideo[] = []
  propriedades:Propriedade[] = []
  rebanho:Rebanho = {
    id: 0,
    id_especie:0,
    id_propriedade: 0,
    qtde_total: 0,
    qtde_vacinado: 0
  }
  submitted: boolean = false
  form:FormGroup

  constructor(
    private service:RebanhoService,
    private especieService:EspecieBovideoService,
    private propriedadeService:PropriedadeService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group(
      {
        id_especie: ['', Validators.required],
        id_propriedade: ['', Validators.required],
        qtde_total: ['', Validators.required]
      }
    )
   }

  ngOnInit(): void {
    this.getEspecie()
    this.getPropriedades()
  }

  getEspecie(){
    this.especieService.get().subscribe(data => this.especies = data)
  }

  getPropriedades(){
    this.propriedadeService.get().subscribe(data => this.propriedades = data)
  }

  onSubmit(){
    this.submitted = true
    if(this.form.invalid){
      return
    }
    this.rebanho = this.form.value
    this.rebanho
    console.log(this.rebanho)
    this.save(this.rebanho)
  }
  save(rebanho:Rebanho){
    this.service.Add(rebanho).subscribe(
      resp => console.log(resp)
    )
  }
}
