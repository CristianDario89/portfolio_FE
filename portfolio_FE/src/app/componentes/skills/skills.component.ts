import { Component, OnInit } from '@angular/core';
 
import { Skill } from 'src/app/model/skill.model';
import { skillservice } from 'src/app/servicios/skill.service';
@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class skillsComponent implements OnInit {
  skillList: any = new Skill("","");
  constructor(private proyService: skillservice) { }

  ngOnInit(): void {
    this.proyService.obtenerDatos().subscribe(data =>{
      console.log("Datos skills: "+ JSON.stringify(data));
      this.skillList = data; 
    });
  }

}
