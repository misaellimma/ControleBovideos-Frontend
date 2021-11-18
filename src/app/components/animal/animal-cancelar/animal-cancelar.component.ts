import { Component, OnInit } from '@angular/core';
import { ProdutorService } from 'src/app/services/produtor.service';

@Component({
  selector: 'app-animal-cancelar',
  templateUrl: './animal-cancelar.component.html',
  styleUrls: ['./animal-cancelar.component.css']
})
export class AnimalCancelarComponent implements OnInit {

  constructor(
    private serviceProdutor:ProdutorService
  ) { }

  ngOnInit(): void {
  }

  
}
