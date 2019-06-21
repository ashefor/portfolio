import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  title = 'Contact- Michael Ashefor - Frontend Developer'
  constructor(private route: Router, private titleService: Title, private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
    this.titleService.setTitle(this.title)
  }

  gohere(){
    this.route.navigate(['/contact'], {queryParams: {q: 'name'}, fragment: "loading"})
  }

  setDocTitle(title: string) {
    this.titleService.setTitle(title);
 }
}
