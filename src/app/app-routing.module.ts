import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditDataDialogComponent } from './components/edit-data-dialog/edit-data-dialog.component';
import { OpenDialogComponent } from './components/open-dialog/open-dialog.component';
import { DialogLoaderComponent } from './components/dialog-loader/dialog-loader.component';

const routes: Routes = [
  {
    path: '', redirectTo: 'load_dialog', pathMatch: 'full'
  },
  {
    path: 'edit',
    component: EditDataDialogComponent,
  }, {
    path: 'load_dialog', component: DialogLoaderComponent
  }

  // {
  //   path: '',
  //   pathMatch: 'full',
  //   redirectTo: '/edit',
  // },
  // {
  //   path: 'edit',
  //   component: EditDataDialogComponent,
  // },
  // {
  //   path: 'open',
  //   component: OpenDialogComponent,
  // },
  // {
  //   path: 'load-dialog',
  //   component: DialogLoaderComponent,
  // }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
