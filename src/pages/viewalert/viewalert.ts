import { Component } from '@angular/core';
import { IonicPage, ViewController, ModalController, LoadingController, NavController, NavParams } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service';
import { Comments } from '../../models/comments.interface';
import { Posts } from '../../models/posts.interface';
import { PostsLikes } from '../../models/postlikes.interface';

/**
 * Generated class for the ViewalertPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-viewalert',
  templateUrl: 'viewalert.html',
})
export class ViewalertPage {
  notify = [];
  post: any;
  posts = [];
  comments = [];
  loginUser = {};
  textLeft: number = 250;
  message: string = "";
  toggled: boolean = false;
  arrayItem: any;
  arrayLastid;
  active;
  filteredArrayLastid;
  deleteCommentArray;
  lastId;
  arrayLastItem;
  arrayLikePosts;
  arrayUser: any;
  users: any;
  liked;
  currentDate: any;
  postComments: any;
  arrayComments;
  filteredArrayComments;
  userProfile;
  commentObject: any;
  commentss;
  heart = true;
  taggedText: any;
  comment = { comment: "" } as Comments;
  commentsArray;
  boundClass;
  taggedItem = false;
  arraySinglePost;
  arrayItems;
  limit: number = 50;
  user = [];
  minutes;
  seconds;
  hours;
  arrayPostLike;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, private firebaseService: FirebaseServiceProvider, public modalCtrl: ModalController, public navParams: NavParams, public viewCtrl: ViewController) {
    this.notify = this.navParams.get('notify');
    console.log(this.notify);
    this.user = this.navParams.get('user');
    this.post = this.navParams.get('post');

    //Change time to hours, minutes, seconds
    this.currentDate = new Date().getTime() / 1000;
    if (this.currentDate - this.post['time'] < 59) {
      this.seconds = true;
      this.post['time'] = Math.round(this.currentDate - this.post['time']) + 's';
    }

    else if (this.currentDate - this.post['time'] > 59 && this.currentDate - this.post['time'] < 3599) {
      this.minutes = true;
      this.post['time'] = Math.round((this.currentDate - this.post['time']) / 60) + 'm';
    }

    else if (this.currentDate - this.post['time'] > 3599) {
      this.hours = true;
      this.post['time'] = Math.round((this.currentDate - this.post['time']) / 3600) + 'h';
    }
    console.log(this.post);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ViewalertPage');
    if (this.firebaseService.getUser() != undefined || this.firebaseService.getUser() != null) {
      this.firebaseService.getUser().snapshotChanges().subscribe(item => {
        this.arrayItem = [];
        var y = item.payload.toJSON();
        y['$key'] = item.key;
        this.loginUser = y;
      })
    }
    this.firebaseService.getCommentLastId().snapshotChanges().subscribe(items => {
      this.arrayLastid = [];
      items.forEach(item => {
        var y = item.payload.toJSON();
        y['$key'] = item.key;
        this.arrayLastid.push(y);
      })
      this.arrayLastid = this.arrayLastid.filter(data => data.postid === this.post['$key']);
      if (this.arrayLastid != 0) {
        var arrayLength = this.arrayLastid.length;
        this.arrayLastItem = this.arrayLastid.slice(0);
        this.lastId = this.arrayLastItem[0].$key;
      }
    })
    this.active = true;

    this.firebaseService.getLikePost().snapshotChanges().subscribe(items => {
      this.arrayLikePosts = [];
      items.forEach(elements => {
        var y = elements.payload.toJSON();
        y['$key'] = elements.key;
        this.liked = y;
        this.arrayLikePosts.push(y);
      })

    })

    this.firebaseService.getUser().snapshotChanges().subscribe(res => {
      this.arrayUser = [];
      var y = res.payload.toJSON();
      y['$key'] = res.key;
      this.loginUser = y;
    })

    this.postComments = this.firebaseService.getMoreComments();

    var x = this.postComments.snapshotChanges().subscribe(items => {
      this.arrayComments = [];
      this.filteredArrayComments = [];
      items.forEach(elements => {
        var y = elements.payload.toJSON();
        y['$key'] = elements.key;
        this.arrayComments.push(y);
      })
      this.filteredArrayComments = this.arrayComments;
      this.filteredArrayComments = this.arrayComments.filter(comments => comments.postid == this.post['$key']);
      this.currentDate = new Date().getTime() / 1000;
      this.filteredArrayComments.map(res => {
        var originalTime = res.time;
        this.commentsArray = [];
        this.users = res;

        if (this.currentDate - res.time < 59) {
          res.time = Math.round(this.currentDate - res.time) + 's';
        }

        else if (this.currentDate - res.time > 59 && this.currentDate - res.time < 3599) {
          res.time = Math.round((this.currentDate - res.time) / 60) + 'm';
        }

        else if (this.currentDate - res.time > 3599) {
          res.time = Math.round((this.currentDate - res.time) / 3600) + 'h';
        }


        var x = this.firebaseService.getUsers(this.users.userid).snapshotChanges().subscribe(items => {

          var y = items.payload.toJSON();
          y['$key'] = items.key;
          this.userProfile = y;

          this.commentObject = {
            commentid: res.$key,
            postid: res.postid,
            userid: res.userid,
            comment: res.comment,
            image: this.userProfile.image,
            username: this.userProfile.username,
            time: res.time,
            color: false,
            taggedText: "",
            originalTime: originalTime
          }
          var indexHarsh = this.commentObject.comment.indexOf('#');

          if (this.commentObject.comment.indexOf('#') > -1) {
            this.taggedItem = true;
            var indexSpace = this.commentObject.comment.indexOf(' ', indexHarsh);

            this.taggedText = this.commentObject.comment.substring(indexHarsh, indexSpace);
            this.commentObject.taggedText = this.taggedText;
          }

          this.commentsArray.push(this.commentObject);
          this.commentsArray = this.commentsArray.reverse();

          this.boundClass = {
            heart: this.heart
          }

          this.commentObject.color = "not active";
          for (var q = 0; q < this.arrayLikePosts.length; q++) {
            if (this.arrayLikePosts[q].postid === this.commentObject.$key) {

              if (this.arrayLikePosts[q].userid === this.firebaseService.userKey) {
                this.commentObject.color = "active";
              }

            } else { console.log('no') }

          }
        })
      })
    })

  }

  trackByName = (index, item) => {
    return item.commentid;
  }

  ionViewDidEnter() {
    /* this.currentDate = new Date().getTime() / 1000;
    this.commentss = this.firebaseService.getMoreComments(this.limit);

    var x = this.commentss.snapshotChanges().subscribe(items => {
      this.arrayItems = [];
      items.forEach(elements => {
        var y = elements.payload.toJSON();
        y['$key'] = elements.key;
        this.arrayItems.push(y);
      })
      this.arrayItems.map(res => {
        if (this.currentDate - res.time > 3600 * 12) {
          this.firebaseService.deleteComment(res.$key);
        }
      });
    }); */
  }

  deleteComment(comment: Comments) {
    console.log(comment.time);
    console.log(comment.$key);

    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

     loading.present().then(res => {
      this.firebaseService.deleteComment(comment["commentid"]);
      this.firebaseService.deleteAlert((comment["originalTime"] * 1000).toString() + this.firebaseService.userKey);

      this.postComments = this.firebaseService.getComments();
      var x = this.postComments.snapshotChanges().subscribe(items => {
        this.arrayComments = [];
        this.filteredArrayComments = [];
        items.forEach(elements => {
          var y = elements.payload.toJSON();
          y['$key'] = elements.key;
          this.arrayComments.push(y);
        });
      });

      this.firebaseService.getSinglePost(comment.postid).snapshotChanges().subscribe(item => {
        console.log(item);
        this.arraySinglePost = [];
        var y = item.payload.toJSON();
        y['$key'] = item.key;
        this.arrayComments = this.arrayComments.filter(data => data.postid == comment.postid);
        y["comments"] = this.arrayComments.length;
        this.firebaseService.updatePost(y);
      });
    })
    loading.dismiss();
    this.viewCtrl.dismiss();
  }

  likePost(post: Posts) {
    console.log(post);
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
          this.firebaseService.updatePost(post);
          var alerts = {
            postid: post.$key,
            postuserid: post.userid,
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
    this.viewCtrl.dismiss();
  }

  deletePost(post: Posts) {
    
    this.deletePostComment(post);
 
  }

  deletePostComment(post?){
   let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present().then(res => {
      this.firebaseService.deletePost(post.$key);
      /* this.viewCtrl.dismiss();
      this.firebaseService.getComments().snapshotChanges().subscribe(items => {
        this.deleteCommentArray = [];
        items.forEach(item => {
          var y = item.payload.toJSON();
          y["key"] = item.key;
          this.deleteCommentArray.push(y);
        });
        this.deleteCommentArray = this.deleteCommentArray.filter(data => data.postid == post.$key);
        this.deleteCommentArray.map(res => {
          this.firebaseService.deleteComment(res.key);
        })
      }) */
      this.navCtrl.push('AlertsPage');
    });
  }


  commentPost(comment: Comments) {
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });

    loading.present().then(res => {
      comment.postid = this.post['$key'];
      comment.userid = this.firebaseService.userKey;
      comment.time = new Date().getTime() / 1000;
      this.firebaseService.comment(comment);

      var alerts = {
        postid: this.post['$key'],
        action: 'md-chatbubbles',
        color: 'activecomment',
        time: new Date().getTime() / 1000,
        commentid: '',
        postuserid: this.post['userid'],
        userid: this.firebaseService.userKey,
        image: this.firebaseService.userImage,
        username: this.firebaseService.userName,
        comment: '',
        message: 'commented on your post',
        post: comment.comment
      }
      this.firebaseService.alertCustomId2(alerts);

      this.postComments = this.firebaseService.getComments();
      var x = this.postComments.snapshotChanges().subscribe(items => {
        this.arrayComments = [];
        this.filteredArrayComments = [];
        items.forEach(elements => {
          var y = elements.payload.toJSON();
          y['$key'] = elements.key;
          this.arrayComments.push(y);
        });
      });

      this.updatePost(comment);
    })
    loading.dismiss();
  }

  updatePost(comment) {
    this.firebaseService.getSinglePost(comment.postid).snapshotChanges().subscribe(item => {
      if (item.key != null) {
        this.arraySinglePost = [];
        var y = item.payload.toJSON();
        y['$key'] = item.key;
        this.arrayComments = this.arrayComments.filter(data => data.postid == comment.postid);
        y["comments"] = this.arrayComments.length;
        this.firebaseService.updatePost(y);
      }
    });
  }



  closePost() {
    this.viewCtrl.dismiss();
  }

  textLength(str) {
    this.textLeft = 250 - str.length;
    console.log(this.textLeft);
  }

  handleSelection(event) {
    this.message = this.message + " " + event.char;
    console.log(this.message);
  }

  navTag() {
    let modal = this.modalCtrl.create('TagboardPage');
    modal.onDidDismiss((data) => {
      if (data) {
        data.name = data.name.replace(/ +/g, "");
        this.message = this.message + ' #' + data.name.toLowerCase();
      }
    })
    modal.present();
  }

}
