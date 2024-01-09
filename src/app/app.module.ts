import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EditDataDialogComponent } from './components/edit-data-dialog/edit-data-dialog.component';
import { OpenDialogComponent } from './components/open-dialog/open-dialog.component';

@NgModule({
  declarations: [
    AppComponent,
    EditDataDialogComponent,
    OpenDialogComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(private injector: Injector) {
    const customElement = createCustomElement(EditDataDialogComponent, { injector });
    customElements.define('app-edit-data-dialog', customElement);
  }
}
