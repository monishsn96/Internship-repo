import { Component, OnInit } from '@angular/core';
import { NgModule } from '@angular/core';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
 
  skilllist ;
  c : number=0;
  newSkill;
  skillage;
  
  constructor() { }

  ngOnInit() {
    this.skilllist=[
    ]
  }
addSkill()
{
  this.skilllist.push({name : this.newSkill});
  this.c++;
  this.newSkill='';
}
deleteSkill(name){
  for(var i=0; i<this.skilllist.length;i++)
  {
    if(this.skilllist[i]["name"]==name){
      this.skilllist.splice(i,1);
    }
  }
  this.c--;
}

}
