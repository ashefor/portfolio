import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { ContactComponent } from './components/contact/contact.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { SkillsComponent } from './components/skills/skills.component';

const routes: Routes = [
  // {path: '', component: HomeComponent, data: {title: 'Michael Ashefor - Frontend Developer'}},
  {path: '', redirectTo: 'about', pathMatch: 'full'},
  {path: 'contact', component: ContactComponent, data: {title: 'Contact- Michael Ashefor - Frontend Developer'}},
  {path: 'about', component: AboutComponent, data: {title: 'About- Michael Ashefor - Frontend Developer'}},
  {path: 'projects', component: ProjectsComponent, data: {title: 'Projects- Michael Ashefor - Frontend Developer'}},
  // {path: 'skills', component: SkillsComponent, data: {title: 'Skills- Michael Ashefor - Frontend Developer'}}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { };
export const allRoutes = [HomeComponent, ContactComponent, AboutComponent, SkillsComponent]
