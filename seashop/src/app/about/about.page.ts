import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.page.html',
  styleUrls: ['./about.page.scss'],
})
export class AboutPage implements OnInit {

  title = 'Le bateau de thibault';
  phoneNumber = '0663999978';
  email = 'lebateaudethibault@gmail.com';
  website = 'www.facebook.com/lebateaudethibault';
  iosClass = '';

  constructor() { }

  ngOnInit() {
    this.iosClass = this.iOS() ? 'ios' : '';
  }

  iOS = () => [
    'iPad Simulator',
    'iPhone Simulator',
    'iPod Simulator',
    'iPad',
    'iPhone',
    'iPod'
  ].includes(navigator.platform)
    // iPad on iOS 13 detection
    || (navigator.userAgent.includes('Mac') && 'ontouchend' in document);

  toFacebook = () => window.open('https://facebook.com/lebateaudethibault', '_blank');
}
