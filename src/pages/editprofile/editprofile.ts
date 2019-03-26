import { Component } from '@angular/core';
import { IonicPage, ViewController, NavController, Platform, NavParams, ActionSheetController } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service';
import { Users } from '../../models/users.interface';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { DomSanitizer } from '@angular/platform-browser';
import { AlertController } from 'ionic-angular';
import { WebCamComponent } from 'ack-angular-webcam';
import * as _ from 'lodash'; // to help loop over files more succinctly
/**
 * Generated class for the EditprofilePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-editprofile',
  templateUrl: 'editprofile.html',
})
export class EditprofilePage {
  //user = {};
  webcam:WebCamComponent;
  user = {} as Users;
  arrayItem;
  files: FileList;
  years = [];
  showfileinput = false;
  //public webcam;//will be populated by ack-webcam [(ref)]
  errorMessage: any;
  oncam = false;
  selectedStatus: any;
  emailValidate = "[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})";
  emailForm = new FormGroup({
    username: new FormControl(),
    status: new FormControl(),
    email: new FormControl(),
    image: new FormControl()
  });

  constructor(public navCtrl: NavController, private alertCtrl: AlertController, public _DomSanitizer: DomSanitizer, public platform: Platform, public actionSheetCtrl: ActionSheetController, private formBuilder: FormBuilder, public navParams: NavParams, public viewCtrl: ViewController, private firebaseService: FirebaseServiceProvider) {
  }

  ionViewDidLoad() {

    if (this.firebaseService.getUser() != undefined || this.firebaseService.getUser() != null) {
      this.firebaseService.getUser().snapshotChanges().subscribe(item => {
        this.arrayItem = [];
        var y = item.payload.toJSON();
        y['$key'] = item.key;
        this.user = y;
      })
    }

    this.selectedStatus = "Graduate";
    console.log('ionViewDidLoad EditprofilePage');
    this.years = [{ name: "Graduate" }, { name: "Freshman" }, { name: "Sophomore" }, { name: "Junior" }, { name: "Senior" }];
    this.emailForm = this.formBuilder.group({
      username: [this.user.username],
      status: [this.user.status],
      image: [this.user.image],
      email: [this.user.email, Validators.compose([Validators.required, Validators.pattern(this.emailValidate)])
      ]
    })

  }

  ionViewDidEnter() {
    if (this.firebaseService.getUser() != undefined || this.firebaseService.getUser() != null) {
      this.firebaseService.getUser().snapshotChanges().subscribe(item => {
        this.arrayItem = [];
        var y = item.payload.toJSON();
        y['$key'] = item.key;
        this.user = y;
      })
    }

    this.selectedStatus = "Graduate";
    this.years = [{ name: "Graduate" }, { name: "Freshman" }, { name: "Sophomore" }, { name: "Junior" }, { name: "Senior" }];
    this.emailForm = this.formBuilder.group({
      username: [this.user.username],
      status: [this.user.status],
      image: [this.user.image],
      email: [this.user.email, Validators.compose([Validators.required, Validators.pattern(this.emailValidate)])
      ]
    })
  }

  closePost() {
    this.viewCtrl.dismiss();
  }

  picture() {
    let actionSheet = this.actionSheetCtrl.create({
      title: 'Select Profile Picture?',
      buttons: [
        {
          text: 'From Camera',
          handler: () => {
            this.camera();
          }
        },
        {
          text: 'Select Picture',
          handler: () => {
            if (this.platform.is('cordova')) {
              this.selectImage();
            }
            else {
              this.showfileinput = true;
            }
          }
        },
        {
          text: 'Cancel',
          role: 'cancel',
          handler: () => {
            console.log('Cancel clicked');
          }
        }
      ]
    });
    actionSheet.present();
  }

  camera() {
    if (this.platform.is('cordova')) {
      this.firebaseService.takePhotograph()
        .then((image) => {
          this.user.image = image.toString();
        })
        .catch((err) => {
          console.log(err);
        });
    }
    else {
      if (this.oncam) {
        this.webcam.getBase64()
          .then(base => {
            this.user.image = base;
            this.oncam = false;
          })
          .catch(e => console.error(e))
      }
      else {
        this.oncam = true;
      }

    }

  }

  selectImage() {

    this.firebaseService.selectPhotograph()
      .then((image) => {
        this.user.image = image.toString();
      })
      .catch((err) => {
        console.log(err);
      });
  }

  cancel() { //cancel action
    this.viewCtrl.dismiss();
  }

  onCamError(err) { }

  onCamSuccess() { }


  handleFiles(event) {
    console.log(event);
    this.files = event.target.files;
    console.log(this.files);
  }

  submit(user: Users) {
    console.log(user.email);
    console.log(this.user.email);
    if (this.firebaseService.authenticated == false) {
      let alert = this.alertCtrl.create({
        title: 'Login',
        inputs: [{
          name: 'email',
          placeholder: 'Email'
        },
        {
          name: 'password',
          placeholder: 'Password',
          type: 'password'
        }
        ],
        buttons: [{
          text: 'Cancel',
          role: 'cancel',
          handler: data => {
            console.log('Canceled Clicked');
          }
        },
        {
          text: 'Login',
          handler: data => {
            
            if (data.email, data.password) {
              this.firebaseService.reauthenticateUser(data)
              //loggedin
            }
            else {
              //failed login
              return false;
            }
          }
        }
        ]
      });
      alert.present();
    }
    else {
      if (this.files == undefined) {
        console.log("undefined")
        user.image = user.image;
        user.blobFile = "";
        this.firebaseService.updateUser(user).then(res => {
          let oldUser = this.navParams.get('user');
          if (user.email != oldUser.email) {
            setTimeout(() => {
              this.firebaseService.verifyEmail(user.email);
              this.navCtrl.push('verifyPage',{user: user});
            }, 5000);
          }
          else {
            this.viewCtrl.dismiss();
          }
        })
      }
      else {
        console.log("blobexist");
        const fileToUpload = this.files;
        const fileIdx = _.range(fileToUpload.length);
        user.blobFile = fileToUpload[0];
        this.firebaseService.updateUser(user).then(res => {
          let oldUser = this.navParams.get('user');
          if (user.email != oldUser.email) {
            setTimeout(() => {
              this.firebaseService.verifyEmail(user.email);
              this.navCtrl.push('verifyPage',{user: user});
            }, 5000);
          }
          else {
            this.viewCtrl.dismiss();
          }
        })
      }
    }

  }

}
