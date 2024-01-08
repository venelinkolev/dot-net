import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditDataDialogComponent } from './components/edit-data-dialog/edit-data-dialog.component';

const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: '/edit',
  },
  {
    path: 'edit',
    component: EditDataDialogComponent,
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
