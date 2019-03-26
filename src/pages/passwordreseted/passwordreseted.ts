import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service';

/**
 * Generated class for the passwordresetedPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-passwordreseted',
  templateUrl: 'passwordreseted.html',
})
export class passwordresetedPage {
  public username: string;
  public password: string;
  public email: string;
  errorMessageReset;



  constructor(public navCtrl: NavController, public navParams: NavParams, private firebaseService: FirebaseServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad passwordresetedPage');
  }

  login(){
    this.navCtrl.push('LoginFlatPage');
  }

}
