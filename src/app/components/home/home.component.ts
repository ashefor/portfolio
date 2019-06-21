import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  title = 'Michael Ashefor-Frontend Developer'
  constructor(private titleService: Title) { }

  ngOnInit() {
    // this.setDocTitle(this.title)
    this.titleService.setTitle('Michael Ashefor-Frontend Developer')
  }

  setDocTitle(title: string) {
    this.titleService.setTitle(title);
 }
}
