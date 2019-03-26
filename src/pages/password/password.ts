import { Component } from '@angular/core';
import { IonicPage, ViewController, NavController, NavParams } from 'ionic-angular';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { FirebaseServiceProvider } from '../../providers/firebase-service';
import { AlertController } from 'ionic-angular';
import { Users } from './../../models/users.interface';
import { useAnimation } from '@angular/core/src/animation/dsl';

/**
 * Generated class for the PasswordPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-password',
  templateUrl: 'password.html',
})
export class PasswordPage {
  passwordForm = new FormGroup({
    oldpassword: new FormControl(),
    newpassword: new FormControl(),
    confirmpassword: new FormControl()
  });
  user: Users = {
    username: '',
    password: '',
    email: '',
    points: 0,
    image: '',
    status: '',
    online: false
  }
  newpassword: any;
  confirmpassword: any;
  errorMessage;

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, public viewCtrl: ViewController, private firebaseService: FirebaseServiceProvider, public navParams: NavParams, private formBuilder: FormBuilder, ) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PasswordPage');
    this.passwordForm = this.formBuilder.group({
      newpassword: [this.newpassword],
      confirmpassword: [this.confirmpassword]
    })
  }

  ionViewDidEnter() {
    this.passwordForm = this.formBuilder.group({
      newpassword: [this.newpassword],
      confirmpassword: [this.confirmpassword]
    })
  }

  closePost() {
    this.viewCtrl.dismiss();
  }

  submit() {
    if(this.confirmpassword == this.newpassword){
     this.firebaseService.updateSignInPassword(this.newpassword);
    }
    else{
    this.errorMessage = "Confirm Password is not the same as New Password";
    }
    }

}
