import { Title } from '@angular/platform-browser';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {
  title = 'Skills-Michael Ashefor-Frontend Developer'
  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle(this.title)
  }

}
