import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AnimalComponent } from './components/animal/animal.component';
import { ProdutorComponent } from './components/produtor/produtor.component';
import { PropriedadeComponent } from './components/propriedade/propriedade.component';
import { RegistroVacinaComponent } from './components/registro-vacina/registro-vacina.component';
import { VendaComponent } from './components/venda/venda.component';

const routes: Routes = [
  { path: "animal", component: AnimalComponent},
  { path: "produtor", component: ProdutorComponent},
  { path: "propriedade", component: PropriedadeComponent},
  { path: "registro-vacina", component: RegistroVacinaComponent},
  { path: "venda", component: VendaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
