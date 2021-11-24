import { Component, OnInit } from '@angular/core';
import { VendaService } from 'src/app/services/venda.service';
import { Location } from '@angular/common';
import { Venda } from 'src/app/models/venda';
import { ActivatedRoute } from '@angular/router';
import { Rebanho } from 'src/app/models/rebanho';
import { Propriedade } from 'src/app/models/propriedade';
import { RebanhoService } from 'src/app/services/rebanho.service';
import { PropriedadeService } from 'src/app/services/propriedade.service';
import { Produtor } from 'src/app/models/produtor';
import { ProdutorService } from 'src/app/services/produtor.service';


@Component({
  selector: 'app-venda-detalhes',
  templateUrl: './venda-detalhes.component.html',
  styleUrls: ['./venda-detalhes.component.css']
})
export class VendaDetalhesComponent implements OnInit {

  erro:boolean = false
  msgErro = ""

  venda = new Venda
  rebanhoOrigem = new Rebanho
  rebanhoDestino = new Rebanho
  propriedadeOrigem = new Propriedade
  propriedadeDestino = new Propriedade
  produtorOrigem = new Produtor
  produtorDestino = new Produtor

  constructor(
    private location: Location, 
    private route: ActivatedRoute,
    private service: VendaService,
    private servicerebanho: RebanhoService,
    private serviceprodutor: ProdutorService,
    private servicepropriedade: PropriedadeService

  ) { }

  ngOnInit(): void {
    this.get()
  }

  get(){
    sessionStorage.setItem("reload", "true")
    const id = Number(this.route.snapshot.paramMap.get('id'))

    this.service.GetId(id).subscribe(
      data => {
        this.venda = data
        this.getRebanho("origem",this.venda.rebanho_origem)
        this.getRebanho("destino",this.venda.rebanho_destino)
      }
    )
  }

  getRebanho(str:string, id:number){
    this.servicerebanho.GetId(id).subscribe(
      data => {
        if(str == "origem"){
          this.rebanhoOrigem = data
          this.getPropriedade(str, this.rebanhoOrigem.id_propriedade)
        }else{
          this.rebanhoDestino = data
          this.getPropriedade(str, this.rebanhoDestino.id_propriedade)
        }
      }
    )
  }

  getPropriedade(str:string, id:number){
    this.servicepropriedade.GetId(id).subscribe(
      data => {
        if(str == "origem"){
          this.propriedadeOrigem = data
          this.getProdutor(str, this.propriedadeOrigem.id_produtor)
        }else{
          this.propriedadeDestino = data
          this.getProdutor(str, this.propriedadeDestino.id_produtor)
        }
      }
    )
  }

  getProdutor(str:string, id:any){
    this.serviceprodutor.GetId(id).subscribe(
      data => {
        if(str == "origem"){
          this.produtorOrigem = data
        }else{
          this.produtorDestino = data
        }
      }
    )
  }

  voltar(){
    setTimeout(() => {
      this.location.back()
    }, 500);
  }

  delete(){
    const id = Number(this.route.snapshot.paramMap.get('id'))

    this.service.Delete(id).subscribe(
      data => console.log(data),
      error => {
        this.erro = true
        this.msgErro = error.error
      }
    )
    this.voltar()
  }

}
