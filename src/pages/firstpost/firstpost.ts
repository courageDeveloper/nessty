import { Component } from '@angular/core';
import { IonicPage, NavController, ModalController, NavParams } from 'ionic-angular';
import { Posts } from '../../models/posts.interface';
import { FirebaseServiceProvider } from '../../providers/firebase-service';
import { Observable } from 'rxjs/Observable';

/**
 * Generated class for the FirstpostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-firstpost',
  templateUrl: 'firstpost.html',
})
export class FirstpostPage {
  message: string = "";
  textLeft: number = 250;
  toggled: boolean = false;
  quote;
  user = {};
  arrayItem: any;
  userKey: Observable<string>;
  posts = { content: "" } as Posts;
  loggedUser;

  constructor(public navCtrl: NavController, public modalCtrl: ModalController, public navParams: NavParams, private firebaseService: FirebaseServiceProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FirstpostPage');
    if (this.firebaseService.getUser() != undefined || this.firebaseService.getUser() != null) {
      this.firebaseService.getUser().snapshotChanges().subscribe(item => {
        this.arrayItem = [];
        var y = item.payload.toJSON();
        y['$key'] = item.key;
        this.user = y;
      })
    }

    /* console.log(this.firebaseService.arrayUsers);
    this.firebaseService.getUsers(this.firebaseService.arrayUsers.user.uid).snapshotChanges().subscribe(item => {
        var y = item.payload.toJSON();
        y['$key'] = item.key;
        this.loggedUser = {
          $key: y['$key'],
          email: y['email'],
          username: y['username'],
          online: y['online'],
          blobFile: y['blobFile'],
          image: y['image'],
          points: y['points'],
          status: y['status']
        }
        console.log(this.loggedUser);
        this.loggedUser.points += 1;
        this.firebaseService.updateUser(this.loggedUser);
      })
      console.log(this.loggedUser); */
  }

  ionViewDidEnter() {
    this.quote = "When the whole class is arguing over the answer being 27 or 28 and you got 278";
  }

  textLength(str) {
    this.textLeft = 250 - str.length;
  }

  handleSelection(event) {
    this.message = this.message + " " + event.char;
  }

  navWall() {
    this.navCtrl.push('TabsPage');
  }
  post(posts: Posts) {
    console.log(posts);
    posts.hearts = 0;
    posts.comments = 0;
    posts.time = new Date().getTime() / 1000;
    this.firebaseService.post(posts);
    this.firebaseService.usersObject.points += 1;
    this.firebaseService.updateUser2(this.firebaseService.usersObject);
    this.navCtrl.push('TabsPage');
  }

  navTag() {
    let modal = this.modalCtrl.create('TagboardPage');
    modal.onDidDismiss((data) => {
      if (data) {
        data.name = data.name.replace(/ +/g, "");
        this.posts.content = this.posts.content + ' #' + data.name.toLowerCase() + ' ';
      }
    })
    modal.present();
  }

}
