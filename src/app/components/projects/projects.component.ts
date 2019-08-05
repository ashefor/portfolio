import { Component, OnInit, AfterViewInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {
  title = 'Projects- Michael Ashefor - Frontend Developer'
  constructor(private titleService: Title) { }
  isloading;
  ngOnInit() {
    this.titleService.setTitle(this.title);
    this.isloading = true;
  }

  toggleMenu() {
    let othernav = document.getElementById('linksha')
    if (othernav.style.display === 'block') {
      othernav.style.display = 'none'
    } else {
      othernav.style.display = 'block'
    }
  }
}
