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

  reload:boolean = true
  erro:boolean = false
  mostrar:boolean = false

  msgErro = ""

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
    if(sessionStorage.getItem("reload") == "true"){
      window.location.reload()
      sessionStorage.setItem("reload", "false")
    }
  }

  getCompras(id:number){
    sessionStorage.setItem('teste', "true")

    this.mostrar = false
    this.service.GetCompra(id).subscribe(
      data => {
        this.vendas = data
        if(this.vendas.length == 0){
          this.msgErro = "Este produtor não possui compras!"
          this.erro = true
        }else{
          this.mostrar = true
        }
        console.log(data);
        
      }
    )
  }

  getVendas(id:number){
    this.mostrar = false
    this.service.GetVenda(id).subscribe(
      data => {
        this.vendas = data
        console.log(data);
        if(this.vendas.length == 0){
          this.msgErro = "Este produtor não possui vendas!"
          this.erro = true
        }else{
          this.mostrar = true
        }
      }
    )
  }

  verificaCpf(str:string){
    this.erro = false
    console.log(str);
    if(this.produtor.cpf == ""){
      this.msgErro = "O campo não pode estar vazio!"
      this.erro = true
    }
    
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
          this.msgErro = error.error
          this.erro = true
        })
      }
  }

  back(){
    this.location.back()
  }
}
