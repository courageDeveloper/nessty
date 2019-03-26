import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service';

/**
 * Generated class for the resetrequestPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-resetrequest',
  templateUrl: 'resetrequest.html',
})
export class resetrequestPage {
  public username: string;
  public password: string;
  public email: string;
  errorMessageReset;
  localStorageItem;



  constructor(public navCtrl: NavController, public navParams: NavParams, private firebaseService: FirebaseServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad resetrequestPage');
    /* var verfiedEmail = this.firebaseService.userObject.emailVerified */
    /* this.localStorageItem = localStorage.setItem('emailVerification',verfiedEmail.toString()); */
  }

  resend(users){
    let email = this.navParams.get('email')
    this.firebaseService.resetPassword(email.trim()).then(res => {
      this.errorMessageReset = this.firebaseService.errorMessageReset;
    });
  }

  navSign(){
    this.navCtrl.push('LoginFlatPage');
  }
}
