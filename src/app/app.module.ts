import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { SimpleContainerComponent } from 'src/components/simple-container/simple-container.component';

@NgModule({
  declarations: [
    AppComponent,
    SimpleContainerComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
