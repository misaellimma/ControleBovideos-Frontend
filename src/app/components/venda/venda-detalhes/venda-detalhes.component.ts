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
import { VendaOutput } from 'src/app/models/vendaOutput';


@Component({
  selector: 'app-venda-detalhes',
  templateUrl: './venda-detalhes.component.html',
  styleUrls: ['./venda-detalhes.component.css']
})
export class VendaDetalhesComponent implements OnInit {

  erro:boolean = false
  msgErro = ""

  venda = new VendaOutput
  produtorOrigem = new Produtor
  produtorDestino = new Produtor

  constructor(
    private location: Location, 
    private route: ActivatedRoute,
    private service: VendaService,
    private serviceprodutor: ProdutorService

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
        this.getProdutor("origem", this.venda.id_propriedade_origem)
        this.getProdutor("destino", this.venda.id_propriedade_destino)
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
