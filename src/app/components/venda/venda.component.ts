import { Component, OnInit } from '@angular/core';
import { EspecieBovideo } from 'src/app/models/especieBovideo';
import { FinalidadeVenda } from 'src/app/models/finalidadeVenda';
import { Rebanho } from 'src/app/models/rebanho';
import { EspecieBovideoService } from 'src/app/services/especie-bovideo.service';
import { FinalidadevendaService } from 'src/app/services/finalidadevenda.service';
import { RebanhoService } from 'src/app/services/rebanho.service';
import { VendaService } from 'src/app/services/venda.service';

@Component({
  selector: 'app-venda',
  templateUrl: './venda.component.html',
  styleUrls: ['./venda.component.css']
})
export class VendaComponent implements OnInit {

  finalidades:FinalidadeVenda[] = []
  rebanhos: Rebanho[] = []
  especies:EspecieBovideo[] = []
  idrebanho:any

  constructor(
    private service: VendaService,
    private rebanhoService:RebanhoService,
    private finalidadeService:FinalidadevendaService,
    private especieService: EspecieBovideoService
  ) { }

  ngOnInit(): void {
    this.getFinalidadeVenda();
    this.getRebanho();
    this.getEspecie();
    this.finalidades.length
    console.log();
    
  }
  getFinalidadeVenda(){
    this.finalidadeService.get().subscribe(data => {this.finalidades = data, console.log(data);})
  }

  getRebanho(){
    
  }

  getEspecie(){
    this.especieService.get().subscribe(data => this.especies = data)
  }

  carregarRebanho(id: any){
    console.log("id " + id);
    this.rebanhoService.GetEspecie(id).subscribe(data => this.rebanhos = data)
  }
}
