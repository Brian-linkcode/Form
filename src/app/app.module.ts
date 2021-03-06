import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';

import { SpecialistService } from './services/specialist.service';
import { DomseguroPipe } from './pipes/domseguro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    DomseguroPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [
    SpecialistService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
