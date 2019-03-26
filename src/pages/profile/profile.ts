import { Component } from '@angular/core';
import { IonicPage, ModalController, AlertController, Platform, NavController, NavParams, LoadingController } from 'ionic-angular';
import { SocialSharing } from '@ionic-native/social-sharing';
import { HttpService } from '../../services/HttpService';
import { catchError } from 'rxjs/operators';
import { FirebaseServiceProvider } from '../../providers/firebase-service';
import { Clipboard } from 'ts-clipboard';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the ProfilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-profile',
  templateUrl: 'profile.html',
  providers: [HttpService]
})
export class ProfilePage {
  user = {};
  images = [];
  active = false;
  myClass;
  overlay;
  categories = [];
  apiResponse = [];
  catObject = {};
  image;
  img;
  apiData;
  errorMessage;
  arrayItem: any;
  localStorageItem;
  userId

  constructor(public navCtrl: NavController, public toastController: ToastController, public clipboard: Clipboard, private alrtctrl: AlertController, private platform: Platform, public httpService: HttpService, private firebaseService: FirebaseServiceProvider, public navParams: NavParams, public modalCtrl: ModalController, private socialSharing: SocialSharing, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ProfilePage');
    this.userId = localStorage.getItem('userId');
    if (this.firebaseService.getUser() != undefined || this.firebaseService.getUser() != null) {
      this.firebaseService.getUser().snapshotChanges().subscribe(item => {
        this.arrayItem = [];
        var y = item.payload.toJSON();
        y['$key'] = item.key;
        this.user = y;
        console.log(this.user);
      })
    }

    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    this.httpService.getCategories().pipe(catchError((err) => { this.errorMessage = err; console.log(err); loading.dismiss(); throw err })).subscribe(res => {
      var images
      this.images = ["https://www.healthbootcamps.com/wp-content/uploads/2018/03/Secrets-to-Living-without-Stress-Anxiety-with-Expert-Mary-Thompson.jpg", "https://www.healthbootcamps.com/wp-content/uploads/2018/07/Renegade-Beauty-by-Nadine-Artemis.png",
        "https://www.healthbootcamps.com/wp-content/uploads/2018/10/Detox-Cleanse-Reena.jpg", "https://www.healthbootcamps.com/wp-content/uploads/2018/10/Healthy-Relationships-for-Healthy-Life.png",
        "https://www.healthbootcamps.com/wp-content/uploads/2018/10/3-Powerful-Secrets-From-Research.jpg", "https://www.healthbootcamps.com/wp-content/uploads/2018/04/Even-Short-Bursts-of-Exercise-Can-Decrease-Disease-and-Risk-of-Death.jpg", "https://www.healthbootcamps.com/wp-content/uploads/2018/09/1-Secret-of-Master-Manifesters-with-Dr.-Dawson-Church.png",
        "https://www.healthbootcamps.com/wp-content/uploads/2018/05/Dr.-Kristin-Comella.jpg", "https://www.healthbootcamps.com/wp-content/uploads/2018/03/Dr.-Mark-Hyman-on-his-new-book_-Food-What-the-heck-should-I-eat_.jpg", "https://www.healthbootcamps.com/wp-content/uploads/2018/05/Calming-Chamomile-Tea.png",
        "https://www.healthbootcamps.com/wp-content/uploads/2018/10/CBD-for-Pain-and-Sleep-with-Dr.-Mary-Clifton.png", "https://www.healthbootcamps.com/wp-content/uploads/2018/10/Ursheet-Parikh.png", "https://www.healthbootcamps.com/wp-content/uploads/2018/06/How-to-Meditate-for-Beginners.png", "https://www.healthbootcamps.com/wp-content/uploads/2018/03/HEALTHIER-Proven-Weight-Loss-with-a-Harvard-MD-Dr.-Akil-and-his-PaleoVedic-Diet.jpg"
      ];

      var apiResponse = [];
      var catObject = {};
      apiResponse = res;

      apiResponse.map(data => {
        this.apiData = data;
        var name = this.apiData.name;
        var id = this.apiData.id;
        var link = this.apiData.link;

        this.catObject = {
          id: id,
          name: name,
          link: link,
          image: this.image
        }
        this.categories.push(this.catObject);

        for (var i = 0; i < this.categories.length; i++) {
          this.categories[i].image = this.images[i];
        }

      })
      setTimeout(function () {
        loading.dismiss();
      }, 10000);
    })



    setInterval(() => {
      this.active = true;
      this.myClass = {
        overlay: this.overlay
      }
    }, 20000);

    setInterval(() => {
      this.active = false;
      this.myClass = {
        overlay: this.overlay
      }
    }, 25000);

    setTimeout(() => {
      loading.dismiss();
    }, 5000);

  }

  ionViewDidEnter() {

  }

  navPost() {
    let modal = this.modalCtrl.create('PostPage');
    modal.onDidDismiss((data) => {
      if (data) {
        console.log(data);
      }
    })
    modal.present();
  }

  editProfile() {
    console.log(this.user);
    let modal = this.modalCtrl.create('EditprofilePage', {user: this.user});
    modal.onDidDismiss((data) => {
      if (data) {
        console.log(data);
      }
    })
    modal.present();
  }

  reload() {
    this.navCtrl.push('ProfilePage');
  }

  viewimage(){
    console.log(this.user);
    let modal = this.modalCtrl.create('ViewpicPage', {user: this.user});
    modal.onDidDismiss((data) => {
      if (data){
        console.log(data);
      }
    });
    modal.present();
  }


  share() {
    this.socialSharing.share('Get Nessty health app from', 'Nessty Health app', null, 'https://play.google.com/store/apps/details?id=com.nessty.nessty').then(() => {
      this.firebaseService.usersObject.points += 1;
      this.firebaseService.updateUser2(this.firebaseService.usersObject);
    }).catch(() => {

    })
  }

  shareTwitter() {
    this.socialSharing.shareViaTwitter('Get Nessty health app from', 'assets/images/Nessty-Logo-5.png', 'https://play.google.com/store/apps/details?id=com.nessty.nessty').then(() => {
      this.firebaseService.usersObject.points += 1;
      this.firebaseService.updateUser2(this.firebaseService.usersObject);
    }).catch(() => {

    });
  }

  shareFacebook() {
    this.socialSharing.shareViaFacebook('Get Nessty health app from', 'assets/images/Nessty-Logo-5.png', 'https://play.google.com/store/apps/details?id=com.nessty.nessty').then(() => {
      this.firebaseService.usersObject.points += 1;
      this.firebaseService.updateUser2(this.firebaseService.usersObject);
    }).catch(() => {

    });
  }

  shareWhatsapp() {
    this.socialSharing.shareViaWhatsApp('Get Nessty health app from', 'assets/images/Nessty-Logo-5.png', 'https://play.google.com/store/apps/details?id=com.nessty.nessty').then(() => {
      this.firebaseService.usersObject.points += 1;
      this.firebaseService.updateUser2(this.firebaseService.usersObject);
    }).catch(() => {

    });
  }

  invite() {
    if (this.platform.is('cordova')) {
      this.socialSharing.share('Get Nessty health app from', 'Nessty Health app', null, 'https://play.google.com/store/apps/details?id=com.nessty.nessty').then(() => {
        this.firebaseService.usersObject.points += 1;
        this.firebaseService.updateUser2(this.firebaseService.usersObject);
      }).catch(() => {

      })
    }
    else {
      console.log('web share');
      let alert = this.alrtctrl.create({
        title: 'Invite friends',
        inputs: [{
          name: 'content',
          type: 'text',
          value: 'Get Nessty health app from https://play.google.com/store/apps/details?id=com.nessty.nessty'
        }],
        buttons: [{
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Canceled Click');
          }
        },
        {
          text: 'Copy',
          handler: data => {
            Clipboard.copy('Get Nessty health app from https://play.google.com/store/apps/details?id=com.nessty.nessty');
            const toast = this.toastController.create({
              message: "Copied to Clipboard",
              duration: 2000
            });
            toast.present();
          }
        }
        ]

      });
      alert.present();
    }
  }

  changePassword() {
    let modal = this.modalCtrl.create('PasswordPage');
    modal.onDidDismiss((data) => {
      if (data) {
        console.log(data);
      }
    })
    modal.present();
  }
}
