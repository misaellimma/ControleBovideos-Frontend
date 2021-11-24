import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalCadastrarComponent } from './components/animal/animal-cadastrar/animal-cadastrar.component';
import { AnimalDetalhesComponent } from './components/animal/animal-detalhes/animal-detalhes.component';
import { AnimalComponent } from './components/animal/animal/animal.component';
import { ProdutorCadastrarComponent } from './components/produtor/produtor-cadastrar/produtor-cadastrar.component';
import { ProdutorDetalhesComponent } from './components/produtor/produtor-detalhes/produtor-detalhes.component';
import { ProdutorEditarComponent } from './components/produtor/produtor-editar/produtor-editar.component';
import { ProdutorComponent } from './components/produtor/produtor/produtor.component';
import { PropriedadeCadastrarComponent } from './components/propriedade/propriedade-cadastrar/propriedade-cadastrar.component';
import { PropriedadeDetalhesComponent } from './components/propriedade/propriedade-detalhes/propriedade-detalhes.component';
import { PropriedadeEditarComponent } from './components/propriedade/propriedade-editar/propriedade-editar.component';
import { PropriedadeComponent } from './components/propriedade/propriedade/propriedade.component';
import { RegistroVacinaCadastrarComponent } from './components/registro-vacina/registro-vacina-cadastrar/registro-vacina-cadastrar.component';
import { RegistroVacinaDetalhesComponent } from './components/registro-vacina/registro-vacina-detalhes/registro-vacina-detalhes.component';
import { RegistroVacinaComponent } from './components/registro-vacina/registro-vacina/registro-vacina.component';
import { VendaVenderComponent } from './components/venda/venda-vender/venda-vender.component';
import { VendaComponent } from './components/venda/venda/venda.component';

const routes: Routes = [
  { path: "animal", component: AnimalComponent},
  { path: "animal-cadastrar", component: AnimalCadastrarComponent},
  { path: "animal/:id", component: AnimalDetalhesComponent},
  { path: "produtor", component: ProdutorComponent},
  { path: "produtor-cadastrar", component: ProdutorCadastrarComponent},
  { path: "produtor-editar/:id", component: ProdutorEditarComponent},
  { path: "produtor/:id", component: ProdutorDetalhesComponent},
  { path: "propriedade", component: PropriedadeComponent},
  { path: "propriedade-editar/:id", component: PropriedadeEditarComponent},
  { path: "propriedade/:id", component: PropriedadeDetalhesComponent},
  { path: "propriedade-cadastrar", component: PropriedadeCadastrarComponent},
  { path: "registro-vacina", component: RegistroVacinaComponent},
  { path: "registro-vacina-cadastrar", component: RegistroVacinaCadastrarComponent},
  { path: "registro-vacina/:id", component: RegistroVacinaDetalhesComponent},
  { path: "venda", component: VendaComponent},
  { path: "venda-vender", component: VendaVenderComponent}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
