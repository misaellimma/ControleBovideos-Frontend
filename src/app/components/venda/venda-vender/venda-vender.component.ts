import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { EspecieBovideo } from 'src/app/models/especieBovideo';
import { FinalidadeVenda } from 'src/app/models/finalidadeVenda';
import { Produtor } from 'src/app/models/produtor';
import { Propriedade } from 'src/app/models/propriedade';
import { Rebanho } from 'src/app/models/rebanho';
import { Venda } from 'src/app/models/venda';
import { EspecieBovideoService } from 'src/app/services/especie-bovideo.service';
import { FinalidadevendaService } from 'src/app/services/finalidadevenda.service';
import { ProdutorService } from 'src/app/services/produtor.service';
import { PropriedadeService } from 'src/app/services/propriedade.service';
import { RebanhoService } from 'src/app/services/rebanho.service';
import { VendaService } from 'src/app/services/venda.service';

@Component({
  selector: 'app-venda-vender',
  templateUrl: './venda-vender.component.html',
  styleUrls: ['./venda-vender.component.css']
})
export class VendaVenderComponent implements OnInit {

  produtorOrigem = new Produtor
  produtorDestino = new Produtor

  rebanhoOrigem = new Rebanho
  rebanhoDestino = new Rebanho

  venda = new Venda

  propriedadesOrigem:Propriedade[] = []
  propriedadesDestino:Propriedade[] = []

  rebanhosOrigem:Rebanho[] = []
  rebanhosDestino:Rebanho[] = []
  finalidades:FinalidadeVenda[] = []

  erro:boolean = false
  validaCpfOrigem:boolean = false
  validaCpfDestino:boolean = false
  validaPropriedadeOrigem:boolean = false
  validaPropriedadeDestino:boolean = false
  validaRebanhoOrigem:boolean = false
  validaRebanhoDestino:boolean = false
  validaFinalidade:boolean = false
  validaQtde:boolean = false

  msgErro = ""
  msgValidaCpfOrigem = ""
  msgValidaCpfDestino = ""
  msgValidaPropriedadeOrigem = ""
  msgValidaPropriedadeDestino = ""
  msgValidaRebanhoOrigem = ""
  msgValidaRebanhoDestino = ""
  msgValidaFinalidade = ""
  msgValidaQtde = ""

  constructor(
    private service: VendaService,
    private produtorService: ProdutorService,
    private rebanhoService:RebanhoService,
    private location: Location,
    private finalidadeService:FinalidadevendaService,
    private propriedadeService: PropriedadeService
  ) { }

  ngOnInit(): void {
    this.getFinalidade()
  }

  save(){
    this.erro = false
    let data = new Date                         //2021-11-22T15:53:53.15
    this.venda.data = formatDate(data, 'yyyy-MM-ddThh:mm:ss', 'en-US')
    this.venda.id_finalidade_venda = Number(this.venda.id_finalidade_venda)
    this.venda.rebanho_origem = Number(this.venda.rebanho_origem)
    this.venda.rebanho_destino = Number(this.venda.rebanho_destino)
    if(this.validaForm())
    {
      this.postVenda()
    }
    
    console.log(this.venda);
    
  }

  postVenda(){
    this.service.Add(this.venda).subscribe(
      data => {
        console.log(data)    
        this.voltar()    
      },
      error => {
        //alert(error.error)
        this.msgErro = error.error
        this.erro = true
        console.log(error)
        
      }
    )
  }

  getOrigem(){
    this.validaCpfOrigem = false
    if(this.produtorOrigem.cpf == this.produtorDestino.cpf)
    {
      if(this.produtorOrigem.cpf != ""){
        this.msgValidaCpfOrigem = "O produtor não pode ser o mesmo de destino!"
        this.validaCpfOrigem = true
      }
    }
    if(this.produtorOrigem.cpf.length > 0)
    {
      this.verificaCpf("origem", this.produtorOrigem.cpf)
    }
  }

  getDestino(){
    this.validaCpfDestino = false
    if(this.produtorOrigem.cpf == this.produtorDestino.cpf)
    {
      if(this.produtorDestino.cpf != ""){
        this.msgValidaCpfDestino = "O produtor não pode ser o mesmo de origem!"
        this.validaCpfDestino = true
      }
    }
    if(this.produtorDestino.cpf.length > 0)
    {
      this.verificaCpf("destino", this.produtorDestino.cpf)
    }
  }

  verificaCpf(str:string,cpf:string){
    this.produtorService.GetCpf(cpf).subscribe(
      data => {
        if(str == "origem"){
          this.produtorOrigem = data
        }else{
          this.produtorDestino = data
        }
        this.getpropriedades(str, data.id)
      },
      error => {
        console.log(error)
        if(str == "origem"){
          this.msgValidaCpfOrigem = error.error
          this.validaCpfOrigem = true
        }else{
          this.msgValidaCpfDestino = error.error
          this.validaCpfDestino = true
        }
    })
  }

  getpropriedades(str:string, id:number){
    this.propriedadeService.GetProdutor(id).subscribe(
      data => {
        if(str == "origem"){
          this.propriedadesOrigem = data
        }else{
          this.propriedadesDestino = data
        }
      }
    )
  }

  getRebanhos(str:string){
    let id
    if(str == "origem"){
      id = this.rebanhoOrigem.id_propriedade
    }else{
      id = this.rebanhoDestino.id_propriedade
    }
    this.rebanhoService.GetPropriedade(id).subscribe(
      data => {
        if(str == "origem"){
          this.rebanhosOrigem = data
        }else{
          this.rebanhosDestino = data
        }
      }
    )
  }

  getFinalidade(){
    this.finalidadeService.get().subscribe(
      data => {
        this.finalidades = data
      }
    )
  }

  verificaEspecie(){
    if(this.getRebanho(this.venda.rebanho_destino) == this.getRebanho(this.venda.rebanho_origem)){
      console.log("estamos aqui");
      
    }
  }

  getRebanho(id:number):any{
    this.rebanhoService.GetId(id).subscribe(
      data => {
        return data.id
      }
    )
  }

  voltar(){
    setTimeout(() => {
      this.location.back()
    }, 500);
  }

  validaForm():boolean{
  
    this.validaPropriedadeOrigem = false
    this.validaPropriedadeDestino = false
    this.validaRebanhoOrigem = false
    this.validaRebanhoDestino = false
    this.validaQtde = false
    this.validaFinalidade = false

    let valida = true
    if(this.validaCpfOrigem){
      this.msgValidaCpfOrigem = "Campo obrigatorio!"
      valida = false
    }

    if(this.validaCpfDestino){
      this.msgValidaCpfDestino = "Campo obrigatorio!"
      valida = false
    }

    if(this.produtorOrigem.cpf == ""){
      this.msgValidaCpfOrigem = "Campo obrigatorio!"
      this.validaCpfOrigem = true
      valida = false
    }

    if(this.produtorDestino.cpf == ""){
      this.msgValidaCpfDestino = "Campo obrigatorio!"
      this.validaCpfDestino = true
      valida = false
    }

    if(this.venda.rebanho_origem == 0 || this.venda.rebanho_origem == null)
    {
      this.validaRebanhoOrigem = true
      this.msgValidaRebanhoOrigem = "Campo obrigatorio!"
      valida = false
    }
    
    if(this.venda.rebanho_destino == 0 || this.venda.rebanho_destino == null)
    {
      this.validaRebanhoDestino = true
      this.msgValidaRebanhoDestino = "Campo obrigatorio!"
      valida = false
    }

    if(this.venda.id_finalidade_venda == 0 || this.venda.id_finalidade_venda == null)
    {
      this.validaFinalidade = true
      this.msgValidaFinalidade = "Campo obrigatorio!"
      valida = false
    }

    if(this.venda.qtde_vendida == 0 || this.venda.qtde_vendida == null){
      this.validaQtde = true
      this.msgValidaQtde = "Campo obrigatorio!"
      valida = false
    }

    return valida
  }

}
