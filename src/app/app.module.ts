import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalComponent } from './components/animal/animal/animal.component';
import { ProdutorComponent } from './components/produtor/produtor/produtor.component';
import { PropriedadeComponent } from './components/propriedade/propriedade/propriedade.component';
import { RegistroVacinaComponent } from './components/registro-vacina/registro-vacina/registro-vacina.component';
import { VendaComponent } from './components/venda/venda/venda.component';
import { ProdutorEditarComponent } from './components/produtor/produtor-editar/produtor-editar.component';
import { PropriedadeEditarComponent } from './components/propriedade/propriedade-editar/propriedade-editar.component';
import { ProdutorCadastrarComponent } from './components/produtor/produtor-cadastrar/produtor-cadastrar.component';
import { ProdutorDetalhesComponent } from './components/produtor/produtor-detalhes/produtor-detalhes.component';
import { PropriedadeDetalhesComponent } from './components/propriedade/propriedade-detalhes/propriedade-detalhes.component';
import { PropriedadeCadastrarComponent } from './components/propriedade/propriedade-cadastrar/propriedade-cadastrar.component';
import { AnimalCadastrarComponent } from './components/animal/animal-cadastrar/animal-cadastrar.component';
import { AnimalDetalhesComponent } from './components/animal/animal-detalhes/animal-detalhes.component';
import { RegistroVacinaCadastrarComponent } from './components/registro-vacina/registro-vacina-cadastrar/registro-vacina-cadastrar.component';
import { RegistroVacinaDetalhesComponent } from './components/registro-vacina/registro-vacina-detalhes/registro-vacina-detalhes.component';
import { VendaVenderComponent } from './components/venda/venda-vender/venda-vender.component';
import { VendaDetalhesComponent } from './components/venda/venda-detalhes/venda-detalhes.component';
import { InicioComponent } from './components/inicio/inicio/inicio.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalComponent,
    ProdutorComponent,
    PropriedadeComponent,
    RegistroVacinaComponent,
    VendaComponent,
    ProdutorEditarComponent,
    ProdutorDetalhesComponent,
    PropriedadeEditarComponent,
    ProdutorCadastrarComponent,
    ProdutorDetalhesComponent,
    PropriedadeDetalhesComponent,
    PropriedadeCadastrarComponent,
    AnimalCadastrarComponent,
    AnimalDetalhesComponent,
    RegistroVacinaCadastrarComponent,
    RegistroVacinaDetalhesComponent,
    VendaVenderComponent,
    VendaDetalhesComponent,
    InicioComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
