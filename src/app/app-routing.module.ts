import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { CreateFormComponent } from './create-form/create-form.component';
import { ModifyFormComponent } from './modify-form/modify-form.component';
import { GeneralViewComponent } from './general-view/general-view.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';

const routes: Routes = [
  
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'general', component: GeneralViewComponent},
  { path: 'create', component: CreateFormComponent},
  { path: 'modify/:id', component: ModifyFormComponent},
  { path: '**', component: PageNotFoundComponent}

];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

export const routingComponents = [HomeComponent, GeneralViewComponent, CreateFormComponent, ModifyFormComponent, PageNotFoundComponent];
