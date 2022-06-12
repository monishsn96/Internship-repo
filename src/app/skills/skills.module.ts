import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {  FormsModule, ReactiveFormsModule} from '@angular/forms';
import { SkillsComponent } from './skills.component';
import { BrowserModule } from '@angular/platform-browser';
/*import { Routes , RouterModule} from '@angular/router'

const routes : Routes =[
{path:'',component:SkillsComponent}
]; */
@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FormsModule,
    BrowserModule,
   // RouterModule.forChild(routes),
    ReactiveFormsModule
  ],
  providers:[],
  bootstrap:[SkillsComponent]
})
export class SkillsModule {
  constructor(){

  }
  
 }
