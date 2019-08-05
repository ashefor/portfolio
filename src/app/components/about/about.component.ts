import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  title = 'About- Michael Ashefor - Frontend Developer'
  constructor(private titleService: Title) { }

  ngOnInit() {
    this.titleService.setTitle(this.title)
  }


  toggleMenu() {
    let othernav = document.getElementById('linksha')
    if (othernav.style.display === 'block') {
      othernav.style.display = 'none'
    } else {
      othernav.style.display = 'block'
    }
  }

  setDocTitle(title: string) {
    this.titleService.setTitle(title);
  }
}
