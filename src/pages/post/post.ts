import { Component } from '@angular/core';
import { IonicPage, App, ViewController, ModalController, NavController, NavParams, } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service';
import { Posts } from '../../models/posts.interface';
import * as $ from 'jquery';
/**
 * Generated class for the PostPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-post',
  templateUrl: 'post.html',
})
export class PostPage {
  message: string = "";
  data: string = "";
  textLeft: number = 250;
  toggled: boolean = false;
  quote;
  arrayItem: any;
  user = {};
  board: any;
  posts = { content: "" } as Posts;
  name;
  test;

  constructor(public navCtrl: NavController, public app: App, private firebaseService: FirebaseServiceProvider, public modalCtrl: ModalController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PostPage');
    if (this.firebaseService.getUser() != undefined || this.firebaseService.getUser() != null) {
      this.firebaseService.getUser().snapshotChanges().subscribe(item => {
        this.arrayItem = [];
        var y = item.payload.toJSON();
        y['$key'] = item.key;
        this.user = y;
      })
    }
  }

  ionViewDidEnter(data) {
    this.quote = "When the whole class is arguing over the answer being 27 or 28 and you got 278";
  }

  closePost() {
    this.viewCtrl.dismiss();
  }

  textLength(str) {
    this.textLeft = 250 - str.length;
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

  signOut() {
    console.log("Logged Out");
    this.viewCtrl.dismiss();
    this.firebaseService.logout();
    this.app.getRootNav().push("LoginFlatPage");
    localStorage.removeItem('userId');
  }

  handleSelection(event) {
    this.message = this.message + " " + event.char;
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
