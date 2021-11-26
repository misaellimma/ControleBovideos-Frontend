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
  validaRebanho:boolean = false
  validaFinalidade:boolean = false
  validaQtde:boolean = false
  validaData:boolean = false

  msgErro = ""
  msgValidaCpfOrigem = ""
  msgValidaCpfDestino = ""
  msgValidaPropriedadeOrigem = ""
  msgValidaPropriedadeDestino = ""
  msgValidaRebanho = ""
  msgValidaFinalidade = ""
  msgValidaQtde = ""
  msgValidaData = ""

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

    this.venda.id_finalidade_venda = Number(this.venda.id_finalidade_venda)
    this.venda.id_propriedade_origem = Number(this.venda.id_propriedade_origem)
    this.venda.id_propriedade_destino = Number(this.venda.id_propriedade_destino)
    this.venda.id_especie = Number(this.venda.id_especie)
    if(this.validaForm())
    {
      this.postVenda()
    }    
  }

  postVenda(){
    this.service.Add(this.venda).subscribe(
      data => {
        this.voltar()    
      },
      error => {
        this.msgErro = error.error
        this.erro = true
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

  getRebanhos(){
    let id = this.venda.id_propriedade_origem

    this.rebanhoService.GetPropriedade(id).subscribe(
      data => {
        this.rebanhosOrigem = data
      }
    )
  }

  getFinalidade(){
    sessionStorage.setItem("reload", "true")
    this.finalidadeService.get().subscribe(
      data => {
        this.finalidades = data
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
    this.validaRebanho= false
    this.validaQtde = false
    this.validaData = false
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

    if(this.venda.id_propriedade_origem == 0 || this.venda.id_propriedade_origem == null)
    {
      this.validaPropriedadeOrigem = true
      this.msgValidaPropriedadeOrigem = "Campo obrigatorio!"
      valida = false
    }
    
    if(this.venda.id_propriedade_destino == 0 || this.venda.id_propriedade_destino == null)
    {
      this.validaPropriedadeDestino = true
      this.msgValidaPropriedadeDestino = "Campo obrigatorio!"
      valida = false
    }

    if(this.venda.id_finalidade_venda == 0 || this.venda.id_finalidade_venda == null)
    {
      this.validaFinalidade = true
      this.msgValidaFinalidade = "Campo obrigatorio!"
      valida = false
    }

    if(this.venda.id_especie == 0 || this.venda.id_especie == null)
    {
      this.validaRebanho = true
      this.msgValidaRebanho = "Campo obrigatorio!"
      valida = false
    }

    if(this.venda.qtde_vendida == null){
      this.validaQtde = true
      this.msgValidaQtde = "Campo obrigatorio!"
      valida = false
    }

    if(this.venda.qtde_vendida < 1){
      this.validaQtde = true
      this.msgValidaQtde = "Não deve ser menor que 1!"
      valida = false
    }

    if(this.venda.data == ""){
      this.validaData = true
      this.msgValidaData = "Campo obrigatorio!"
      valida = false
    }

    return valida
  }

}
