import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Endereco } from 'src/app/models/endereco';
import { Municipio } from 'src/app/models/municipio';
import { EnderecoService } from 'src/app/services/endereco.service';
import { MunicipioService } from 'src/app/services/municipio.service';

@Component({
  selector: 'app-produtor-cadastrar',
  templateUrl: './produtor-cadastrar.component.html',
  styleUrls: ['./produtor-cadastrar.component.css']
})
export class ProdutorCadastrarComponent implements OnInit {
  municipios: Municipio[] = []
  form: FormGroup
  endereco:Endereco = {
    id: 0,
    id_municipio: 0,
    rua: '',
    numero:''
  }

  constructor(
    private municipioService:MunicipioService,
    private enderecoService:EnderecoService,
    private formBuilder: FormBuilder
  ) {
    this.form = this.formBuilder.group({
      nome:['', Validators.required],
      cpf:['', Validators.required],
      id_municipio:['', Validators.required],
      rua:['', Validators.required],
      numero:['', Validators.required]
    })
   }

  ngOnInit(): void {
    this.getMunicipio()
  }

  postEndereco(){
    this.enderecoService.Add(this.endereco).subscribe(
      resp => console.log(resp),
      error => console.log(error)
      
    )
  }

  getMunicipio(){
    this.municipioService.get().subscribe(data => this.municipios = data)
  }

  onSubmit(){
    let temp = this.form.value
    this.endereco.id_municipio = temp.id_municipio
    this.endereco.rua = temp.rua
    this.endereco.numero = temp.numero
    console.log(this.endereco);
    
    this.postEndereco()

  }
}
