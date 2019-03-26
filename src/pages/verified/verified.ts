import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service';

/**
 * Generated class for the verifiedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-verified',
  templateUrl: 'verified.html',
})
export class verifiedPage {
  public username: string;
  public password: string;
  public email: string;
  errorMessageReset;



  constructor(public navCtrl: NavController, public navParams: NavParams, private firebaseService: FirebaseServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad verifiedPage');
    console.log(this.firebaseService.userObject);
  }

  login(){
    this.navCtrl.push('LoginFlatPage');
  }

}
