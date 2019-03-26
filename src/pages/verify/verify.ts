import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service';

/**
 * Generated class for the verifyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-verify',
  templateUrl: 'verify.html',
})
export class verifyPage {
  public username: string;
  public password: string;
  public email: string;
  errorMessageReset;
  localStorageItem;



  constructor(public navCtrl: NavController, public navParams: NavParams, private firebaseService: FirebaseServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad verifyPage');
    /* var verfiedEmail = this.firebaseService.userObject.emailVerified */
    /* this.localStorageItem = localStorage.setItem('emailVerification',verfiedEmail.toString()); */
  }

  resend(users){
  let user =  this.navParams.get('user')
    this.firebaseService.verifyEmail(user.email);
  }

  navSign(){
    this.navCtrl.push('RegisterPage');
  }
}
