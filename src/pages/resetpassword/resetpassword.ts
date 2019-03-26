import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service';

/**
 * Generated class for the ResetpasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resetpassword',
  templateUrl: 'resetpassword.html',
})
export class ResetpasswordPage {
  public username: string;
  public password: string;
  public email: string;
  errorMessageReset;



  constructor(public navCtrl: NavController, public navParams: NavParams, private firebaseService: FirebaseServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetpasswordPage');
  }

  backlogin() {
    this.navCtrl.pop();
  }

  Send() {
    console.log(this.email);
    this.navCtrl.push('resetrequestPage', {email: this.email});
    this.firebaseService.resetPassword(this.email.trim()).then(res => {
      this.errorMessageReset = this.firebaseService.errorMessageReset;
    });

  }

}
