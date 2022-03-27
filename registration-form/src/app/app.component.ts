import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'registration-form';
  navLinks: any[];
  activeLinkIndex = 0; 
  constructor(private router: Router) {
    this.navLinks = [
      {
        label: 'Add Config',
        link: './config',
        index: 0,
      },
      {
        label: 'View Config',
        link: './viewConfig',
        index: 1,
      },

    ];
  }
  ngOnInit(): void {
    this.router.events.subscribe((res) => {
      this.activeLinkIndex = this.navLinks.indexOf(
        this.navLinks.find((tab) => tab.link === '.' + this.router.url)
      );
    });
  }
}
