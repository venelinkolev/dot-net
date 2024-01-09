import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditDataDialogComponent } from './components/edit-data-dialog/edit-data-dialog.component';
import { OpenDialogComponent } from './components/open-dialog/open-dialog.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/edit',
  },
  {
    path: 'edit',
    component: EditDataDialogComponent,
  },
  {
    path: 'open',
    component: OpenDialogComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
