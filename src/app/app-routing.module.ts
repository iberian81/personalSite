import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { CreateProjectsComponent } from './components/create-projects/create-projects.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';



const routes: Routes = [
  {path: '', component: AboutComponent},
  {path: 'about-me', component: AboutComponent},
  {path: 'projects', component: ProjectsComponent},
  {path: 'create-project', component: CreateProjectsComponent},
  {path: 'contact', component: ContactComponent},
  {path: '**', component: ErrorComponent},
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
