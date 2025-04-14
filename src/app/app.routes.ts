import { Routes } from '@angular/router';
import { ToDoListComponent } from '../components/to-do-list/to-do-list.component';
import { AddItemComponent } from '../components/add-item/add-item.component';

export const routes: Routes = [
    {path: '',pathMatch:'full',redirectTo:'to-do-list'},
    {path:'to-do-list',loadComponent:()=>import('../components/to-do-list/to-do-list.component').then(m => m.ToDoListComponent)},
    {path:'add-item',component:AddItemComponent}

];
