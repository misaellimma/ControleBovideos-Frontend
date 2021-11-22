import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produtor } from 'src/app/models/produtor';
import { Propriedade } from 'src/app/models/propriedade';
import { Rebanho } from 'src/app/models/rebanho';
import { ProdutorService } from 'src/app/services/produtor.service';
import { PropriedadeService } from 'src/app/services/propriedade.service';
import { RebanhoService } from 'src/app/services/rebanho.service';

@Component({
  selector: 'app-animal-detalhes',
  templateUrl: './animal-detalhes.component.html',
  styleUrls: ['./animal-detalhes.component.css']
})
export class AnimalDetalhesComponent implements OnInit {

  rebanho = new Rebanho
  propriedade = new Propriedade
  produtor = new Produtor

  constructor(
    private service:RebanhoService,
    private produtorService:ProdutorService,
    private rebanhoService:RebanhoService,
    private route: ActivatedRoute,
    private propriedadeService:PropriedadeService
  ) { }

  ngOnInit(): void {
    this.get()
  }

  get(){
    const id = Number(this.route.snapshot.paramMap.get('id'))

    this.service.GetId(id).subscribe(
      data => {
        this.rebanho = data
        console.log(data);
        this.getPropriedade(Number(data.id_propriedade))
      }
    )
  }

  getPropriedade(id: number){
    this.propriedadeService.GetId(id).subscribe(
      data => {
        this.propriedade = data
        this.getProdutor(Number(data.id_produtor))
      }
    )
  }

  getProdutor(id:number){
    this.produtorService.GetId(id).subscribe(
      data =>{
        this.produtor = data
      }
    )
  }

  voltar(){

  }
}
