import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationEnd } from '@angular/router';
import { Title } from '@angular/platform-browser';
import { filter, map } from 'rxjs/operators';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AngularFireDatabase } from 'angularfire2/database';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  title = 'Contact- Michael Ashefor - Frontend Developer';
  submitted = false;
  spinner;
  disableBtn;
  constructor(private route: Router,
    private titleService: Title,
    private activatedRoute: ActivatedRoute,
    private db: AngularFireDatabase) { }

  ngOnInit() {
    this.titleService.setTitle(this.title)
  }

  gohere() {
    this.route.navigate(['/contact'], { fragment: "loading" })
  }

  setDocTitle(title: string) {
    this.titleService.setTitle(title);
  }

  contactForm = new FormGroup({
    name: new FormControl(null, [Validators.required]),
    email: new FormControl(null, [Validators.required, Validators.email]),
    message: new FormControl(null, [Validators.required])
  })

  remove() {
    this.submitted = false;
  }
  
  onSubmit() {
    this.spinner = true;
    this.disableBtn = true
     if(this.contactForm.invalid){
       this.spinner = false;
        this.disableBtn = true
       return
     }

    const name = this.contactForm.value.name
    const email = this.contactForm.value.email
    const message = this.contactForm.value.message
    console.log(this.contactForm.value)
    this.disableBtn = true
    this.db.list('/messages').push(this.contactForm.value);
    setTimeout(() => {
      this.submitted = true;
      this.contactForm.reset();
      this.disableBtn = false
      this.spinner = false;
    }, 3000)
    setTimeout(() => {
      this.submitted = false;
      this.disableBtn = false
      this.spinner = false;
    }, 5000)
  }
}
