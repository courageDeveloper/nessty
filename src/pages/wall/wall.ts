import { Component } from '@angular/core';
import { IonicPage, ModalController, NavController, App, NavParams, AlertController, Platform, LoadingController, Icon } from 'ionic-angular';
import { AngularFireList, AngularFireDatabase } from '@angular/fire/database';
import { Posts } from '../../models/posts.interface';
import { PostsLikes } from '../../models/postlikes.interface';
import { FirebaseServiceProvider } from '../../providers/firebase-service';
import { Users } from '../../models/users.interface';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Clipboard } from 'ts-clipboard';
import { ToastController } from 'ionic-angular';

/**
 * Generated class for the WallPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-wall',
  templateUrl: 'wall.html',
})
export class WallPage {
  users = [];
  public filteredUsers: any = [];
  posts: AngularFireList<Posts>;
  usersProfile: AngularFireList<Users>;
  arrayPosts;
  arrayItems;
  arrayItemsTime;
  arrayItemsPost;
  arrayItems2;
  objPost;
  filteredArrayComments;
  userObjects;
  arrayLikePosts;
  boundClass;
  heart = true;
  comment;
  deleteCommentArray;
  postComments: any;
  liked;
  taggedText: any;
  active;
  arrayComments;
  filterredArrayComments: any;
  taggedItem = false;
  commentUpdate: Posts;
  commentLength: any;
  currentDate: any;
  time: any;
  minutes;
  show = false;
  seconds;
  hours;
  arrayAllUsers;
  userId;
  lastKey;
  finishedLoading = false;
  lastId
  limit: number = 50;

  constructor(public navCtrl: NavController, public toastController: ToastController, public clipboard: Clipboard, private alrtctrl: AlertController, private platform: Platform, private socialSharing: SocialSharing, private firebasedb: AngularFireDatabase, public navParams: NavParams, public app: App, public modalCtrl: ModalController, public loadingCtrl: LoadingController, private firebaseService: FirebaseServiceProvider) {
  }

  ionViewDidLoad() {
    this.firebaseService.getPostLastId().snapshotChanges().subscribe(items => {
      items.forEach(item => {
        this.lastId = item.key;
      })
    })

    console.log('ionViewDidLoad WallPage');
    this.active = true;

    this.postComments = this.firebaseService.getComments();
    var z = this.postComments.snapshotChanges().subscribe(items => {
      this.arrayComments = [];
      items.forEach(elements => {
        var y = elements.payload.toJSON();
        y['$key'] = elements.key;
        this.arrayComments.push(y);
      })
    })

    this.firebaseService.getLikePost().snapshotChanges().subscribe(items => {
      this.arrayLikePosts = [];
      items.forEach(elements => {
        var y = elements.payload.toJSON();
        y['$key'] = elements.key;
        this.liked = y;
        this.arrayLikePosts.push(y);
      })

    })

    this.posts = this.firebaseService.getPost(this.limit);

    var x = this.posts.snapshotChanges().subscribe(items => {
      this.arrayItems = [];
      items.forEach(elements => {
        var y = elements.payload.toJSON();
        y['$key'] = elements.key;
        this.arrayItems.push(y);
      })
      this.currentDate = new Date().getTime() / 1000;

      this.arrayItems.map(res => {
        this.arrayPosts = [];

        if (this.currentDate - res.time < 59) {
          this.seconds = true;
          res.time = Math.round(this.currentDate - res.time) + 's';
        }

        else if (this.currentDate - res.time > 59 && this.currentDate - res.time < 3599) {
          this.minutes = true;
          res.time = Math.round((this.currentDate - res.time) / 60) + 'm';
        }

        else if (this.currentDate - res.time > 3599) {
          this.hours = true;
          res.time = Math.round((this.currentDate - res.time) / 3600) + 'h';
        }

        var x = this.firebaseService.getUsers(res.userid).snapshotChanges().subscribe(items => {
          console.log(items.payload.toJSON());
          if (items.payload.toJSON() != null) {
            var y = items.payload.toJSON();
            y['$key'] = items.key;

            this.userObjects = y;
            console.log(this.userObjects);

            this.objPost = {
              username: this.userObjects.username,
              image: this.userObjects.image,
              userid: res.userid,
              $key: res.$key,
              comments: res.comments,
              content: res.content,
              hearts: res.hearts,
              time: res.time,
              status: "",
              color: false,
              taggedText: ""
            }

            var indexHarsh = this.objPost.content.indexOf('#');

            if (this.objPost.content.indexOf('#') > -1) {
              this.taggedItem = true;
              var indexSpace = this.objPost.content.indexOf(' ', indexHarsh);

              this.taggedText = this.objPost.content.substring(indexHarsh, indexSpace);
              this.objPost.taggedText = this.taggedText;
            }
            this.arrayPosts.push(this.objPost);
            this.filteredUsers = this.arrayPosts;
            this.filteredUsers = this.filteredUsers.reverse();
            this.userId = this.firebaseService.userKey;
            console.log(this.filteredUsers);
            this.filteredUsers.forEach(data => {

              if (this.lastId === data.$key) {
                this.finishedLoading = true;
              }
              this.filteredArrayComments = this.arrayComments.filter(comments => comments.postid == data.$key);

              this.commentLength = this.filteredArrayComments.length;
              data.comments = this.commentLength;
            })

            this.boundClass = {
              heart: this.heart
            }

            this.objPost.color = "not active";
            for (var q = 0; q < this.arrayLikePosts.length; q++) {
              if (this.arrayLikePosts[q].postid === this.objPost.$key) {

                if (this.arrayLikePosts[q].userid === this.firebaseService.userKey) {
                  this.objPost.color = "active";
                }

              } else { console.log('no') }
            }
          }
        })
      })
    })

  }

  ionViewDidEnter() {
    /*     this.currentDate = new Date().getTime() / 1000;
        this.posts = this.firebaseService.getPost(this.limit);
    
        var x = this.posts.snapshotChanges().subscribe(items => {
          this.arrayItems = [];
          items.forEach(elements => {
            var y = elements.payload.toJSON();
            y['$key'] = elements.key;
            this.arrayItems.push(y);
          })
          this.arrayItems.map(res => {
            if (this.currentDate - res.time > 3600 * 12) {
              this.firebaseService.deletePost(res.$key);
              this.deleteCommentArray = [];
              this.firebaseService.getComments().snapshotChanges().subscribe(items => {
                items.forEach(item => {
                  var y = item.payload.toJSON();
                  y["key"] = item.key;
                  this.deleteCommentArray.push(y);
                });
                this.deleteCommentArray = this.deleteCommentArray.filter(data => data.postid == res.$key);
                this.deleteCommentArray.map(data => {
                  this.firebaseService.deleteComment(data.key);
                })
              });
            }
          })
        }) */
  }

  newPosts() {
    this.navCtrl.push('WallPage');
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 800);
  }

  likePost(post: Posts) {
    console.log(post)
    var postLike: PostsLikes;
    postLike = {
      userid: this.firebaseService.userKey,
      postid: post.$key,
      status: true
    }

    if (post["color"] != "active") {

      this.firebaseService.likePost(postLike);

      this.active = true;

      if (postLike.postid === post.$key) {

        if (postLike.userid === this.firebaseService.userKey) {
          post["color"] = "active";
          post.hearts += 1;
          this.firebaseService.usersObject.points += 1;
          this.firebaseService.updateUser2(this.firebaseService.usersObject);
          this.firebaseService.updatePost(post);
          var alerts = {
            postid: post.$key,
            postuserid: post.userid,
            status: true,
            action: 'md-heart',
            color: 'active',
            time: new Date().getTime() / 1000,
            commentid: '',
            userid: this.firebaseService.userKey,
            image: this.firebaseService.userImage,
            username: this.firebaseService.userName,
            comment: '',
            message: 'liked your post',
            post: post.content
          }
          this.firebaseService.alertCustomId(alerts);
        }

      } else { console.log('no') }

    }
    else {
      post["color"] = "not active";
      this.firebaseService.deleteLikePost((post.$key + this.firebaseService.userKey).toString());
      this.firebaseService.deleteAlert(post.$key + this.firebaseService.userKey);
      post.hearts -= 1;
      this.firebaseService.updatePost(post);
    }

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

  signOut() {
    console.log("Logged Out");
    this.firebaseService.logout();
    this.app.getRootNav().push("LoginFlatPage");
    localStorage.removeItem('userId');
  }

  sharePost(user) {
    console.log(user);
    if (this.platform.is('cordova')) {
      this.socialSharing.share('Get Nessty health app from', 'https://play.google.com/store/apps/details?id=com.nessty.nessty', null, user.content).then(() => {
        this.firebaseService.usersObject.points += 1;
        this.firebaseService.updateUser2(this.firebaseService.usersObject);
      }).catch(() => {

      })
    }
    else {
      console.log('web share');
      let alert = this.alrtctrl.create({
        title: 'Copy link to share',
        inputs: [{
          name: 'content',
          type: 'text',
          value: user.content
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
            Clipboard.copy(user.content);
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

  getPost(user) {
    console.log(user);
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present();

    setTimeout(() => {
      loading.dismiss();
    }, 800);

    let modal = this.modalCtrl.create('ViewpostPage', { user: user });
    modal.onDidDismiss((data) => {
      if (data) {
        console.log(data);
      }
    })
    modal.present();
  }

  filterUsers($event: any): void {
    const value: string = $event.target.value ? $event.target.value.toLowerCase() : '';
    this.filteredUsers = [];

    for (let user of this.arrayPosts) {
      if (user.username.toLowerCase().indexOf(value) !== -1) {
        this.filteredUsers.push(user);
      }
      else if (user.content.toLowerCase().indexOf(value) !== -1) {
        this.filteredUsers.push(user);
      }
    }
  }

  deletePost(post: Posts) {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present().then(res => {
      this.firebaseService.deletePost(post.$key);
      this.deleteCommentArray = [];
      this.firebaseService.getComments().snapshotChanges().subscribe(items => {
        items.forEach(item => {
          var y = item.payload.toJSON();
          y["key"] = item.key;
          this.deleteCommentArray.push(y);
        });
        this.deleteCommentArray = this.deleteCommentArray.filter(data => data.postid == post.$key);
        this.deleteCommentArray.map(res => {
          this.firebaseService.deleteComment(res.key);
        })
      })
    });

    loading.dismiss();
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
