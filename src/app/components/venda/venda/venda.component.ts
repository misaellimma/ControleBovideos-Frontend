import { Component, OnInit } from '@angular/core';
import { EspecieBovideo } from 'src/app/models/especieBovideo';
import { FinalidadeVenda } from 'src/app/models/finalidadeVenda';
import { Produtor } from 'src/app/models/produtor';
import { Rebanho } from 'src/app/models/rebanho';
import { EspecieBovideoService } from 'src/app/services/especie-bovideo.service';
import { FinalidadevendaService } from 'src/app/services/finalidadevenda.service';
import { ProdutorService } from 'src/app/services/produtor.service';
import { RebanhoService } from 'src/app/services/rebanho.service';
import { VendaService } from 'src/app/services/venda.service';
import { Location } from '@angular/common';
import { Venda } from 'src/app/models/venda';


@Component({
  selector: 'app-venda',
  templateUrl: './venda.component.html',
  styleUrls: ['./venda.component.css']
})
export class VendaComponent implements OnInit {

  validaCpf:boolean = false

  msgValidaCpf = ""

  produtor = new Produtor

  finalidades:FinalidadeVenda[] = []
  rebanhos: Rebanho[] = []
  especies:EspecieBovideo[] = []
  vendas:Venda[] = []


  constructor(
    private service: VendaService,
    private produtorService:ProdutorService,
    private location: Location, 
    private finalidadeService:FinalidadevendaService,
    private especieService: EspecieBovideoService
  ) { }

  ngOnInit(): void {
    
  }

  getCompras(id:number){
    this.service.GetCompra(id).subscribe(
      data => {
        this.vendas = data
        console.log(data);
        
      }
    )
  }

  getVendas(id:number){
    this.service.GetVenda(id).subscribe(
      data => {
        this.vendas = data
        console.log(data);
      }
    )
  }

  verificaCpf(str:string){
    this.validaCpf = false
    console.log(str);
    
    if(this.produtor.cpf.length > 0){
      this.produtorService.GetCpf(this.produtor.cpf).subscribe(
        data => {
          console.log(data.id);
          
          this.produtor = data
          if(str == "compra"){
            this.getCompras(data.id)
          }else{
            this.getVendas(data.id)
          }
        },
        error => {
          console.log(error)
          this.msgValidaCpf = error.error
          this.validaCpf = true
        })
      }
  }

  back(){
    this.location.back()
  }
}
