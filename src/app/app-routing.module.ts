import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalCancelarComponent } from './components/animal/animal-cancelar/animal-cancelar.component';
import { AnimalProdutorComponent } from './components/animal/animal-produtor/animal-produtor.component';
import { AnimalPropriedadeComponent } from './components/animal/animal-propriedade/animal-propriedade.component';
import { AnimalComponent } from './components/animal/animal/animal.component';
import { ProdutorCadastrarComponent } from './components/produtor/produtor-cadastrar/produtor-cadastrar.component';
import { ProdutorDetalhesComponent } from './components/produtor/produtor-detalhes/produtor-detalhes.component';
import { ProdutorEditarComponent } from './components/produtor/produtor-editar/produtor-editar.component';
import { ProdutorComponent } from './components/produtor/produtor/produtor.component';
import { PropriedadeCadastrarComponent } from './components/propriedade/propriedade-cadastrar/propriedade-cadastrar.component';
import { PropriedadeDetalhesComponent } from './components/propriedade/propriedade-detalhes/propriedade-detalhes.component';
import { PropriedadeEditarComponent } from './components/propriedade/propriedade-editar/propriedade-editar.component';
import { PropriedadeComponent } from './components/propriedade/propriedade/propriedade.component';
import { RegistroVacinaCancelarComponent } from './components/registro-vacina/registro-vacina-cancelar/registro-vacina-cancelar.component';
import { RegistroVacinaPropriedadeComponent } from './components/registro-vacina/registro-vacina-propriedade/registro-vacina-propriedade.component';
import { RegistroVacinaComponent } from './components/registro-vacina/registro-vacina/registro-vacina.component';
import { VendaCancelarComponent } from './components/venda/venda-cancelar/venda-cancelar.component';
import { VendaComprasComponent } from './components/venda/venda-compras/venda-compras.component';
import { VendaVendasComponent } from './components/venda/venda-vendas/venda-vendas.component';
import { VendaComponent } from './components/venda/venda.component';

const routes: Routes = [
  { path: "animal", component: AnimalComponent},
  { path: "animal-cancelar", component: AnimalCancelarComponent},
  { path: "animal-produtor", component: AnimalProdutorComponent},
  { path: "animal-propriedade", component: AnimalPropriedadeComponent},
  { path: "produtor", component: ProdutorComponent},
  { path: "produtor-cadastrar", component: ProdutorCadastrarComponent},
  { path: "produtor-editar/:id", component: ProdutorEditarComponent},
  { path: "produtor/:id", component: ProdutorDetalhesComponent},
  { path: "propriedade", component: PropriedadeComponent},
  { path: "propriedade-editar/:id", component: PropriedadeEditarComponent},
  { path: "propriedade/:id", component: PropriedadeDetalhesComponent},
  { path: "propriedade-cadastrar", component: PropriedadeCadastrarComponent},
  { path: "registro-vacina", component: RegistroVacinaComponent},
  { path: "registro-vacina-cancelar", component: RegistroVacinaCancelarComponent},
  { path: "registro-vacina-propriedade", component: RegistroVacinaPropriedadeComponent},
  { path: "venda", component: VendaComponent},
  { path: "venda-cancelar", component: VendaCancelarComponent},
  { path: "venda-vendas", component: VendaVendasComponent},
  { path: "venda-compras", component: VendaComprasComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
