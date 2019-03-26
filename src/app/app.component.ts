import { Component } from '@angular/core';
import { Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { AlertController } from 'ionic-angular';
import { FirebaseServiceProvider } from './../providers/firebase-service';
import { HttpService } from '../services/HttpService';
import { MailChimpService } from '../services/mail-chimp-service';
import { FirebaseDynamicLinks } from '@ionic-native/firebase-dynamic-links/ngx';

@Component({
  templateUrl: 'app.html',
  providers: [HttpService, MailChimpService, FirebaseDynamicLinks]
})
export class MyApp {
  private regex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  rootPage: any = 'RegisterPage';
  emailVerification;
  userId;

  constructor(
    public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    private httpService: HttpService,
    public alertCtrl: AlertController,
    private mailChimpService: MailChimpService,
    private firebaseDynamicLinks: FirebaseDynamicLinks,
    private firebaseService: FirebaseServiceProvider) {

    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
      localStorage.setItem("mailChimpLocal", "true");
    });
    this.userId = localStorage.getItem('userId');
    console.log(this.userId);
    this.emailVerification = JSON.parse(localStorage.getItem('emailVerification'));
    console.log(this.emailVerification);
    if (this.userId != undefined || this.userId != null) {
      this.rootPage = 'TabsPage';
    }
    else {
      if (this.emailVerification == undefined || this.emailVerification == null) {
        this.rootPage = 'RegisterPage';
      }
      else if (this.emailVerification == false) {
        this.rootPage = 'verifyPage';
      }
      else if (this.emailVerification == true) {
        this.rootPage = 'LoginFlatPage';
      }
    }
    /*  else if(this.userId != undefined || this.userId != null){
       this.rootPage = 'WallPage';
     } */

  /*   this.firebaseDynamicLinks.onDynamicLink()
  .subscribe((res: any) => console.log(res), (error:any) => console.log(error)); */

  }


}
