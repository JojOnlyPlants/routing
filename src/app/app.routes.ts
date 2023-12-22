import { Routes } from '@angular/router';
import { InicioComponent } from './inicio/inicio.component';
import { GraphComponent } from './graph/graph.component';
import { CrudComponent } from './crud/crud.component';
export const routes: Routes = [
    {'path': '', 'component': InicioComponent},
    {'path': 'graph', 'component': GraphComponent},
    {'path': 'crud', 'component': CrudComponent},
    {'path': '**', 'component': InicioComponent}
];
