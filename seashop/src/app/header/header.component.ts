import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd, ActivatedRoute, ResolveEnd, RoutesRecognized, ChildActivationEnd } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  title: string;

  constructor(private router: Router, private route: ActivatedRoute) {
    this.router.events.subscribe(event => {
      if (event instanceof ChildActivationEnd && event.snapshot.data.name) {
        this.title = event.snapshot.data.name;
      }
      if (event instanceof NavigationEnd) {
        const pathTitle = this.router.getCurrentNavigation().extras?.state?.recipe?.name
          || this.router.getCurrentNavigation().extras?.state?.restaurant?.name
          || this.router.getCurrentNavigation().extras?.state?.boat?.name;
        const tmpTitle: string = pathTitle ? pathTitle : (this.title ? this.title = this.title : this.router.url.split('/')[1]);
        this.title = tmpTitle.charAt(0).toUpperCase() + tmpTitle.slice(1);
      }
    });
  }
  ngOnInit() {
  }
}
