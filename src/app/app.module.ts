import { Injector, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { createCustomElement } from '@angular/elements';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';

import { MatDialogModule } from '@angular/material/dialog';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatProgressBarModule } from '@angular/material/progress-bar';
// import {  } from '@angular/material/';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { EditDataDialogComponent } from './components/edit-data-dialog/edit-data-dialog.component';
import { OpenDialogComponent } from './components/open-dialog/open-dialog.component';
import { InputFieldComponent } from './components/input-field/input-field.component';
import { DialogLoaderComponent } from './components/dialog-loader/dialog-loader.component';
import { NumberFormatDirective } from './unit/number-format.directive';

@NgModule({
  declarations: [
    AppComponent,
    EditDataDialogComponent,
    OpenDialogComponent,
    InputFieldComponent,
    DialogLoaderComponent,
    NumberFormatDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatCheckboxModule,
    FormsModule,
    MatProgressBarModule,
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
