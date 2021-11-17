import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AnimalComponent } from './components/animal/animal.component';
import { ProdutorComponent } from './components/produtor/produtor.component';
import { PropriedadeComponent } from './components/propriedade/propriedade.component';
import { RegistroVacinaComponent } from './components/registro-vacina/registro-vacina.component';
import { VendaComponent } from './components/venda/venda.component';

@NgModule({
  declarations: [
    AppComponent,
    AnimalComponent,
    ProdutorComponent,
    PropriedadeComponent,
    RegistroVacinaComponent,
    VendaComponent
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
