import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { TableroHotelesComponent } from './tablero-hoteles/tablero-hoteles.component';
import { AppComponent } from './app.component';


const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    children: [
      {
        path: 'Hoteles',
        component: TableroHotelesComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
