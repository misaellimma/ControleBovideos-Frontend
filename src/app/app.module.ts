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
import { VendaComponent } from './components/venda/venda.component';
import { AnimalCancelarComponent } from './components/animal/animal-cancelar/animal-cancelar.component';
import { AnimalProdutorComponent } from './components/animal/animal-produtor/animal-produtor.component';
import { AnimalPropriedadeComponent } from './components/animal/animal-propriedade/animal-propriedade.component';
import { ProdutorEditarComponent } from './components/produtor/produtor-editar/produtor-editar.component';
import { PropriedadeEditarComponent } from './components/propriedade/propriedade-editar/propriedade-editar.component';
import { RegistroVacinaCancelarComponent } from './components/registro-vacina/registro-vacina-cancelar/registro-vacina-cancelar.component';
import { RegistroVacinaPropriedadeComponent } from './components/registro-vacina/registro-vacina-propriedade/registro-vacina-propriedade.component';
import { VendaCancelarComponent } from './components/venda/venda-cancelar/venda-cancelar.component';
import { VendaVendasComponent } from './components/venda/venda-vendas/venda-vendas.component';
import { VendaComprasComponent } from './components/venda/venda-compras/venda-compras.component';
import { ProdutorCadastrarComponent } from './components/produtor/produtor-cadastrar/produtor-cadastrar.component';
import { ProdutorDetalhesComponent } from './components/produtor/produtor-detalhes/produtor-detalhes.component';
import { PropriedadeDetalhesComponent } from './components/propriedade/propriedade-detalhes/propriedade-detalhes.component';
import { PropriedadeCadastrarComponent } from './components/propriedade/propriedade-cadastrar/propriedade-cadastrar.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalComponent,
    ProdutorComponent,
    PropriedadeComponent,
    RegistroVacinaComponent,
    VendaComponent,
    AnimalCancelarComponent,
    AnimalProdutorComponent,
    AnimalPropriedadeComponent,
    ProdutorEditarComponent,
    ProdutorDetalhesComponent,
    PropriedadeEditarComponent,
    RegistroVacinaCancelarComponent,
    RegistroVacinaPropriedadeComponent,
    VendaCancelarComponent,
    VendaVendasComponent,
    VendaComprasComponent,
    ProdutorCadastrarComponent,
    ProdutorDetalhesComponent,
    PropriedadeDetalhesComponent,
    PropriedadeCadastrarComponent
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
