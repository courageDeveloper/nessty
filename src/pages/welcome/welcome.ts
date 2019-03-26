import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Platform } from 'ionic-angular';

import {
  trigger,
  state,
  style,
  animate,
  transition
} from "@angular/animations";

/**
 * Generated class for the WelcomePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-welcome',
  templateUrl: 'welcome.html',
  animations: [
    trigger('elementState', [
      state('opaque', style({
        opacity: 1
      })),
      state('transparent', style({
        opacity: 0
      })),
      transition('opaque => transparent', animate('5000ms ease-in')),
      transition('transparent => opaque', animate('5000ms ease-out'))
    ])
  ]
})
export class WelcomePage {
  text;
  textNessty;
  textUnleash;
  state = "transparent";
  myClasses;
  bgcolor;
  active;
  backgroundimage;
  myOtherClasses;
  show = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, public platform: Platform) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad WelcomePage');
    this.text = "Hello!, What's on your mind?";
    this.state = "opaque";

    setTimeout(() => {
      this.state = "transparent";
    }, 5000);

    setTimeout(() => {
      this.show = false;
      this.text = "What's Stressing you?, bugging you?, or even making you smile?";
      this.state = "opaque";
    }, 10000);

    setTimeout(() => {
      this.state = "transparent";
    }, 15000);

    setTimeout(() => {
      this.show = false;
      this.text = "Or ask a question, we are here for you";
      this.state = "opaque";
    }, 20000);

    setTimeout(() => {
      this.state = "transparent";
    }, 25000);

    setTimeout(() => {
      this.show = true;
      this.text = "";
      this.textNessty = "assets/images/nesty.png";
      this.textUnleash = "TEEN TALK!";
      this.state = "opaque";
      this.active = true;
      this.myClasses = {
        bgcolor: this.bgcolor,
        backgroundimage: this.backgroundimage
      };
    }, 30000);

    setTimeout(() => {
      this.navCtrl.push('TabsPage');
    }, 35000);
  }

  navWall(){
    this.navCtrl.push('TabsPage');
  }

}
