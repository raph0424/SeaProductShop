import { Component, OnInit } from '@angular/core';
import { DomSanitizer, SafeStyle } from '@angular/platform-browser';
import { ActivatedRoute, Router } from '@angular/router';
import { Boat } from '../models/boat';

@Component({
  selector: 'app-boat-infos',
  templateUrl: './boat-infos.page.html',
  styleUrls: ['./boat-infos.page.scss'],
})
export class BoatInfosPage implements OnInit {
  boatName: string;
  boat: Boat;
  backgroundImg: SafeStyle;

  constructor(private route: ActivatedRoute, private router: Router, private sanitizer: DomSanitizer) {
    this.loadData();
  }

  ngOnInit() {
  }

  loadData = async () => {
    await this.route.queryParams.subscribe((params) => {
      if (this.router.getCurrentNavigation().extras.state) {
        this.boat =
          this.router.getCurrentNavigation().extras.state.boat;
        this.backgroundImg = this.sanitizer.bypassSecurityTrustStyle(`url(${this.boat.picture})`);
      }
    });
  };
}
