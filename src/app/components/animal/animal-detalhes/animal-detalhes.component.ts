import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produtor } from 'src/app/models/produtor';
import { Propriedade } from 'src/app/models/propriedade';
import { Rebanho } from 'src/app/models/rebanho';
import { RegistroVacina } from 'src/app/models/registrovacina';
import { ProdutorService } from 'src/app/services/produtor.service';
import { PropriedadeService } from 'src/app/services/propriedade.service';
import { RebanhoService } from 'src/app/services/rebanho.service';
import { RegistrovacinaService } from 'src/app/services/registrovacina.service';
import { Location } from '@angular/common';
import { RebanhoOut } from 'src/app/models/rebanhoOut';
import { RegistroVacinaOut } from 'src/app/models/registroVacinaOut';


@Component({
  selector: 'app-animal-detalhes',
  templateUrl: './animal-detalhes.component.html',
  styleUrls: ['./animal-detalhes.component.css']
})
export class AnimalDetalhesComponent implements OnInit {

  mostrar:boolean = false

  rebanho = new RebanhoOut
  propriedade = new Propriedade
  produtor = new Produtor
  registroVacinas: RegistroVacinaOut[] = []

  constructor(
    private service:RebanhoService,
    private produtorService:ProdutorService,
    private registroService:RegistrovacinaService,
    private route: ActivatedRoute,
    private location: Location, 
    private propriedadeService:PropriedadeService
  ) { }

  ngOnInit(): void {
    sessionStorage.setItem("reload", "true")
    this.get()
  }

  get(){
    const id = Number(this.route.snapshot.paramMap.get('id'))

    this.service.GetId(id).subscribe(
      data => {
        this.rebanho = data
        this.getRegistro(id)
      }
    )
  }

  getRegistro(id:number){
    this.registroService.GetRebanho(id).subscribe(
      data => {
        this.registroVacinas = data
        if(this.registroVacinas.length > 0){
          this.mostrar = true
        }
        console.log(data);
      }
    )
  }

  voltar(){
    setTimeout(() => {
      this.location.back()
    }, 500);
  }
}
