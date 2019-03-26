import { Component } from '@angular/core';
import { IonicPage, ViewController, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ViewpicPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-viewpic',
  templateUrl: 'viewpic.html',
})
export class ViewpicPage {
  user: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.user = this.navParams.get('user');
    console.log(this.user);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewpicPage');
  }

  ionViewDidEnter() {
    this.user = this.navParams.get('user');
    console.log(this.user);
  }

  closePost() {
    this.viewCtrl.dismiss();
  }

}
