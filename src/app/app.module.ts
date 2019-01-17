import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EncabezadoComponente} from './componentes/encabezado/encabezado.componente';
import { CuerpoComponente } from './componentes/cuerpo/cuerpo.componente';

@NgModule({
  declarations: [
    AppComponent,
    EncabezadoComponente,
    CuerpoComponente
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
