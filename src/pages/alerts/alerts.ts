import { Component } from '@angular/core';
import { IonicPage, NavController, AlertController, Platform, ModalController, NavParams, LoadingController } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Posts } from '../../models/posts.interface';
import { Alerts } from '../../models/alerts.interface';
import { Clipboard } from 'ts-clipboard';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the AlertsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-alerts',
  templateUrl: 'alerts.html',
})
export class AlertsPage {
  notifications = [];
  active;
  activecomment;
  activeshare;
  heart;
  comment;
  share;
  boundClass;
  alertsArray;
  userArray;
  minutes;
  seconds;
  lastId
  hours;
  alertObjects;
  arrayItems
  user: any;
  post: any;
  finishedLoading = false;
  posts: any;
  alerts;
  arrayAlertsItems
  arrayPostLike;
  currentDate: any;
  limit: number = 50;
  public filteredNotifications: any = [];

  constructor(public navCtrl: NavController, public toastController: ToastController, public clipboard: Clipboard, private alrtctrl: AlertController, private platform: Platform, private socialSharing: SocialSharing, public navParams: NavParams, private firebaseService: FirebaseServiceProvider, public modalCtrl: ModalController, public loadingCtrl: LoadingController) {
  }

  ionViewDidLoad() {
    

    }

  ionViewDidEnter() {
    //Change alert status.
    this.firebaseService.getAlerts().snapshotChanges().subscribe(items => {
      this.arrayAlertsItems = [];
      items.forEach(item => {
        var y = item.payload.toJSON();
        y['$key'] = item.key;
        this.arrayAlertsItems.push(y);
      })
      this.arrayAlertsItems.forEach(res => {
        console.log(res.$key)
        res.status = false;
        this.firebaseService.updateAlert(res);
      })
    })

        this.firebaseService.getAlertLastId().snapshotChanges().subscribe(items => {
          items.forEach(item => {
            this.lastId = item.key;
          })
        })
    return this.loadAlerts();
      }

  loadAlerts() {
        this.active = true;
        this.activecomment = true;
        this.activeshare = true;
        this.currentDate = new Date().getTime() / 1000;

        this.alertsArray = [];
        this.firebaseService.getAlert(this.limit).snapshotChanges().subscribe(items => {
          items.forEach(item => {
            var y = item.payload.toJSON();
            y['$key'] = item.key;

            if (this.currentDate - y["time"] < 59) {
              this.seconds = true;
              y["time"] = Math.round(this.currentDate - y["time"]) + 's';
            }
            else if (this.currentDate - y["time"] > 59 && this.currentDate - y["time"] < 3599) {
              this.minutes = true;
              y["time"] = Math.round((this.currentDate - y["time"]) / 60) + 'm';
            }

            else if (this.currentDate - y["time"] > 3599) {
              this.hours = true;
              y["time"] = Math.round((this.currentDate - y["time"]) / 3600) + 'h';
            }
            this.alertsArray.push(y);
          });

          this.filteredNotifications = this.alertsArray;
          this.filteredNotifications = this.filteredNotifications.reverse();
          this.filteredNotifications = this.filteredNotifications.filter(data => data.postuserid == this.firebaseService.userKey);
          /* console.log(this.filteredNotifications);
          this.filteredNotifications.forEach(res => {
            this.firebaseService.getSinglePost(res.postid).snapshotChanges().subscribe(item => {
              var y = item.payload.toJSON();
              y['$key'] = item.key;
    
            })
          }) */
          this.filteredNotifications.forEach(data => {
            if (this.lastId === data.$key) {
              this.finishedLoading = true;
            }
          })
        });

        this.boundClass = {
          heart: this.heart,
          comment: this.comment,
          share: this.share
        }

        //DELETE AFTER 12HRS;
        /* this.currentDate = new Date().getTime() / 1000;
        this.alerts = this.firebaseService.getAlert(this.limit);
        var x = this.alerts.snapshotChanges().subscribe(items => {
          this.arrayItems = [];
          items.forEach(elements => {
            var y = elements.payload.toJSON();
            y['$key'] = elements.key;
            this.arrayItems.push(y);
          })
          this.arrayItems.map(res => {
            if (this.currentDate - res.time > 3600 * 12) {
              this.firebaseService.deleteAlert(res.$key);
            }
          }) 
        })*/
      }

  deleteAlert(alert: Alerts) {
        let loading = this.loadingCtrl.create({
          content: 'Please wait...'
        });

        loading.present().then(res => {
          this.firebaseService.deleteAlert(alert.$key);
        });

        loading.dismiss();
        this.navCtrl.push('AlertsPage');
        this.navCtrl.pop();
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

  reload() {
        let loading = this.loadingCtrl.create({
          content: 'Please wait...'
        });

        loading.present();

        setTimeout(() => {
        loading.dismiss();
      }, 800);
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

  filterUsers($event: any): void {
    const value: string = $event.target.value ? $event.target.value.toLowerCase() : '';
    this.filteredNotifications = [];

    for (let user of this.notifications) {
      if (user.username.toLowerCase().indexOf(value) !== -1) {
        this.filteredNotifications.push(user);
      }
      else if (user.post.toLowerCase().indexOf(value) !== -1) {
        this.filteredNotifications.push(user);
      }
    }
  }


  getAlert2(notify) {
    console.log(notify);
    this.connectDb(notify);
  }

  connectDb(notify?) {
    this.firebaseService.getSinglePost(notify.postid).snapshotChanges().subscribe(itemp => {
      var x = itemp.payload.toJSON();
      x['$key'] = itemp.key
      this.posts = x;
      this.post = {
        $key: this.posts['$key'],
        comments: this.posts['comments'],
        content: this.posts['content'],
        hearts: this.posts['hearts'],
        time: this.posts['time'],
        userid: this.posts['userid']
      }

      //Activate color of heart
      this.firebaseService.getLikePost().snapshotChanges().subscribe(items => {
        this.arrayPostLike = [];
        items.forEach(item => {
          var y = item.payload.toJSON();
          y['$key'] = item.key;
          this.arrayPostLike.push(y)
          this.arrayPostLike = this.arrayPostLike.filter(data => data.postid === this.post['$key']);
        })
        console.log(this.arrayPostLike);
        this.arrayPostLike.forEach(res => {
          if (res.userid == this.firebaseService.userKey) {
            this.post = {
              $key: this.posts['$key'],
              comments: this.posts['comments'],
              content: this.posts['content'],
              color: 'active',
              hearts: this.posts['hearts'],
              time: this.posts['time'],
              userid: this.posts['userid']
            }
          }
        })
      })
      this.firebaseService.getUsers(this.posts.userid).snapshotChanges().subscribe(item => {
        var y = item.payload.toJSON();
        y['$key'] = item.key
        this.user = y;
        let modal = this.modalCtrl.create('ViewalertPage', { notify: notify, user: this.user, post: this.post });
        modal.onDidDismiss((data) => {
          if (data) {
            console.log(data);
          }
        })
        modal.present();
      })
    })
  }


  loadMore(infiniteScroll) {

    this.limit += 50;
    setTimeout(() => {
      this.ionViewDidLoad();

      console.log('Async operation has ended');
      infiniteScroll.complete();
    }, 1000);

  }

}
