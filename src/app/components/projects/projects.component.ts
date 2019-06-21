import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  title = 'Projects- Michael Ashefor - Frontend Developer'
  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle(this.title)
  }

}
