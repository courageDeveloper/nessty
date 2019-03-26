import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { Users } from '../../models/users.interface';
import { FirebaseServiceProvider } from '../../providers/firebase-service';
/**
 * Generated class for the RegisterPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-register',
  templateUrl: 'register.html'
})
export class RegisterPage {
  @ViewChild(Slides) slides: Slides;
  public username: string;
  public password: string;
  public email: string;
  users = {} as Users;
  years = [];
  startSlide;
  usersArray;
  disable = false;
  errorMessage: any;
  errorMessageUser: any;
  localStorageItem;
  selectedStatus: any;
  emailValidate = "[A-Za-z0-9._%+-]{3,}@[a-zA-Z]{3,}([.]{1}[a-zA-Z]{2,}|[.]{1}[a-zA-Z]{2,}[.]{1}[a-zA-Z]{2,})";
  emailForm = new FormGroup({
    email: new FormControl()
  })

  constructor(public navCtrl: NavController, public navParams: NavParams, private formBuilder: FormBuilder, private firebaseService: FirebaseServiceProvider) {
  }

  ionViewDidLoad() {
    this.selectedStatus = "Graduate";
    this.slides.lockSwipes(true);
    console.log('ionViewDidLoad RegisterPage');
    this.years = [{ name: "Graduate" }, { name: "Freshman" }, { name: "Sophomore" }, { name: "Junior" }, { name: "Senior" }];
    this.emailForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern(this.emailValidate)])
      ]
    })
  }

  ionViewDidEnter() {
    this.selectedStatus = "Graduate";
    this.slides.lockSwipes(true);
    this.years = [{ name: "Freshman" }, { name: "Sophomore" }, { name: "Junior" }, { name: "Senior" }, { name: "Graduate" }];
    this.startSlide = this.slides.isBeginning();
    this.emailForm = this.formBuilder.group({
      email: ['', Validators.compose([Validators.required, Validators.pattern(this.emailValidate)])
      ]
    })
  }

  backlogin() {
    this.navCtrl.push('LoginFlatPage');
  }

  slideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    this.slides.lockSwipes(true);
    this.startSlide = this.slides.isBeginning();
  }

  emailNext() {
    if (this.emailForm.valid) {
      this.slides.lockSwipes(false);
      this.slides.slideNext(500, true);
    }
  }

  next() {
    this.slides.lockSwipes(false);
    this.slides.slideNext(500, true);
    this.errorMessage = " ";
  }

  prev() {
    this.slides.lockSwipes(false);
    this.slides.slidePrev(500, true);
  }

  chooseImage(event) {
    console.log(event);
  }

  checkUser() {
    this.disable = false;
    this.errorMessageUser = "";
    this.firebaseService.getAllUsers().snapshotChanges().subscribe(items => {
      this.usersArray = [];
      items.forEach(item => {
        var y = item.payload.toJSON();
        y['$key'] = item.key;
        this.usersArray.push(y);
      })
      this.usersArray.forEach(res => {
        if (this.users.username.toLowerCase() == res.username.toLowerCase()) {
          this.errorMessageUser = "This user already exists";
          this.disable = true;
        }
      })
    })
  }

  checkEmail() {
    this.disable = false;
    this.errorMessageUser = "";
    this.firebaseService.getAllUsers().snapshotChanges().subscribe(items => {
      this.usersArray = [];
      items.forEach(item => {
        var y = item.payload.toJSON();
        y['$key'] = item.key;
        this.usersArray.push(y);
      })
      this.usersArray.forEach(res => {
        if (this.users.email == res.email) {
          this.errorMessageUser = "This email already exists";
          this.disable = true;
        }
      })
    })
  }

  submit(users: Users) {
    users.points = 0;
    users.blobFile = "";
    users.image = "";
    users.online = true;
    this.firebaseService.signUp(users).then(res => {
      this.errorMessage = this.firebaseService.errorMessage;
      if (this.errorMessage == null || this.errorMessage == " ") {
        this.navCtrl.push('verifyPage', {user: users});
        this.firebaseService.verifyEmail(users.email);
      }
    }).catch(error => {
      console.log(error);
    });
  }



}
