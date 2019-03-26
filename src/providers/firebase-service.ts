import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFireDatabase, AngularFireList } from '@angular/fire/database';
import { Users } from './../models/users.interface';
import { Posts } from './../models/posts.interface';
import { Alerts } from './../models/alerts.interface';
import { Comments } from './../models/comments.interface';
import { PostsLikes } from './../models/postlikes.interface';
import { AlertController } from 'ionic-angular';
import { Categories } from './../models/categories.interface';
import * as firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/storage';
import { Observable } from 'rxjs/Observable';
import { Camera, CameraOptions } from '@ionic-native/camera';

/*
  Generated class for the FirebaseServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class FirebaseServiceProvider {
  private user: Observable<firebase.User>;
  userObject: firebase.User;
  userList: AngularFireList<Users>;
  postList: AngularFireList<Posts>;
  alertList: AngularFireList<Alerts>;
  categoryList: AngularFireList<Categories>;
  public cameraImage: String
  alertListRef = firebase.database().ref('alerts');
  commentListRef = firebase.database().ref('comments');
  categoryListRef = firebase.database().ref('categories');
  commentList: AngularFireList<Comments>;
  postListRef = firebase.database().ref('posts');
  userListRef = firebase.database().ref('users');
  postLikeRef = firebase.database().ref('postlikes');
  postLike: AngularFireList<PostsLikes>;
  errorMessage;
  errorMessageReset;
  errorMessageReauth;
  private authState: any;
  arrayItem: any;
  localStorageItem;
  userKey: Observable<string>;
  userName: Observable<string>;
  userImage: Observable<string>;
  userPassword: any;
  authenticated = false;
  limit: number = 50;
  commentTime: any;
  arrayUsers;
  usersObject;
  loggedUser;
  userObjects;
  userAuth = firebase.auth().currentUser;

  constructor(public http: HttpClient, private firebasedb: AngularFireDatabase, private alertCtrl: AlertController, private afAuth: AngularFireAuth, private _CAMERA: Camera) {
    console.log('Hello FirebaseServiceProvider Provider');
    this.user = afAuth.authState;
    console.log(this.user);
    this.afAuth.authState.subscribe(auth => {
      if (auth != undefined && auth != null) {
        this.userObject = auth;
      }

      if (this.getUser() != undefined || this.getUser() != null) {
        this.getUser().snapshotChanges().subscribe(item => {
          this.arrayItem = [];
          var y = item.payload.toJSON();
          y['$key'] = item.key;
          this.arrayItem.push(y);
          this.usersObject = this.arrayItem[0];
          this.userKey = this.arrayItem[0].$key;
          this.userName = this.arrayItem[0].username;
          this.userImage = this.arrayItem[0].image;
        })
      }
    })

  }

  getUser() {
    if (this.userObject != undefined || this.userObject != null) {
      const userId = this.userObject.uid;
      const path = `users/${userId}`;
      return this.firebasedb.object(path);
    }
  }

  getUsers(id) {
    const usersId = id;
    const path = `users/${id}`;
    return this.firebasedb.object(path);
  }

  getAuthUser() {
    console.log(this.userAuth);
    return this.userAuth = firebase.auth().currentUser;
  }

  updateSignIEmail(email: string) {
    var user = firebase.auth().currentUser;
    user.updateEmail(email).then(res => {
      console.log("Update Successful");
    }).catch(err => {
      console.log(err.message);
    })
  }

  reauthenticateUser(credentials) {
    var user = firebase.auth().currentUser;
    var credential = firebase.auth.EmailAuthProvider.credential(credentials.email, credentials.password);

    user.reauthenticateAndRetrieveDataWithCredential(credential).then(res => {
      this.authenticated = true;
    }).catch(error => {

    })
  }

  updateSignInPassword(password: string) {
    var user = firebase.auth().currentUser;
    user.updatePassword(password).then(res => {
      console.log("Update Successful");
    }).catch(err => {
      this.errorMessageReauth = err.message;
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
            console.log(data);
            if (data.email, data.password) {
              this.reauthenticateUser(data)
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
      console.log(err.message);
    })
  }

  verifyEmail(email: any) {
    console.log(firebase.auth().currentUser.email);
    var actionCodeSettings = {
      url: "http://demo.sarutech.com/nessty/#/verified/" + firebase.auth().currentUser.email,
      handleCodeInApp: false,
       /* iOS: {
         bundleId: 'com.nessty.app'
       }, */
       android: {
         packageName: 'com.nessty.app',
         installApp: true,
         //minimumVersion: '12'
       },
       dynamicLinkDomain: "nesstyapp.page.link"
    };

    console.log(email);
    var user = firebase.auth().currentUser;
    console.log(user);
    user.sendEmailVerification(actionCodeSettings).then(res => {
      console.log("Email sent");
    }).catch(err => {
      console.log(err);
    })
  }

  resetPassword(email: string): Promise<void> {
    /*  var actionCodeSettings = {
       url: "http://localhost:8100/#/passwordreseted" + firebase.auth().currentUser.email,
        handleCodeInApp: false,
       iOS: {
         bundleId: 'com.nessty.app'
       },
       android: {
         packageName: 'com.nessty.app',
         installApp: true,
         minimumVersion: '12'
       },
       dynamicLinkDomain: "https://nesstyapp.page.link/6SuK?d=1" 
     }; */
    console.log(email);
    var auth = firebase.auth();
    return auth.sendPasswordResetEmail(email).then(res => {
      console.log("Email Sent");
    }).catch(err => {
      this.errorMessageReset = err.message;
      console.log(err.message);
    })
  }

  category(categories: Categories) {
    this.categoryList = this.getCategories();
    this.categoryList.push({
      userid: this.userKey,
      categoryid: categories["id"],
      name: categories.name,
      link: categories.link,
      togglestatus: categories.togglestatus
    })
  }

  categoryRef(categories: Categories) {
    this.categoryList = this.getCategories();
    this.categoryListRef.child(categories["id"] + this.userKey).set({
      userid: this.userKey,
      categoryid: categories["id"],
      name: categories.name,
      link: categories.link,
      togglestatus: categories.togglestatus
    })
  }

  post(posts: Posts) {
    this.postList = this.getPost(this.limit);
    this.postList.push({
      userid: this.userKey,
      content: posts.content,
      time: posts.time,
      hearts: posts.hearts,
      comments: posts.comments
    })
  }

  alert(alerts: Alerts) {
    this.alertList = this.getAlert(this.limit);
    this.alertList.push({
      userid: this.userKey,
      postid: alerts.postid,
      time: alerts.time,
      action: alerts.action,
      color: alerts.color,
      status: alerts.status,
      commentid: alerts.commentid,
      image: alerts.image,
      username: alerts.username,
      post: alerts.post,
      comment: alerts.comment,
      postuserid: alerts.postuserid
    })
  }

  updateAlert(alerts: Alerts) {
    console.log(alerts);
    this.alertListRef.child(alerts.$key).update({
      userid: this.userKey,
      postid: alerts.postid,
      time: alerts.time,
      action: alerts.action,
      color: alerts.color,
      status: alerts.status,
      commentid: alerts.commentid,
      image: alerts.image,
      username: alerts.username,
      post: alerts.post,
      comment: alerts.comment,
      postuserid: alerts.postuserid
    })
  }

  comment(comments: Comments) {
    this.commentTime = comments.time;
    this.commentList = this.getComments();
    this.commentList.push({
      userid: this.userKey,
      postid: comments.postid,
      comment: comments.comment,
      time: comments.time
    })
  }

  likePost(postlike: PostsLikes) {
    this.postLike = this.firebasedb.list('postlikes');
    this.postLikeRef.child(postlike.postid + this.userKey).set({
      userid: this.userKey,
      postid: postlike.postid,
      status: true
    })
  }

  alertCustomId(alerts: Alerts) {
    console.log(alerts);
    //this.alertList = this.getAlert(this.limit);
    this.alertListRef.child(alerts.postid + this.userKey).set({
      userid: this.userKey,
      postid: alerts.postid,
      time: alerts.time,
      action: alerts.action,
      color: alerts.color,
      status: alerts.status,
      commentid: alerts.commentid,
      image: alerts.image,
      username: alerts.username,
      post: alerts.post,
      comment: alerts.comment,
      message: alerts.message,
      postuserid: alerts.postuserid
    })
  }

  alertCustomId2(alerts: Alerts) {
    //this.alertList = this.getAlert(this.limit);
    this.alertListRef.child((this.commentTime * 1000).toString() + this.userKey).set({
      userid: this.userKey,
      postid: alerts.postid,
      time: alerts.time,
      action: alerts.action,
      color: alerts.color,
      status: alerts.status,
      commentid: alerts.commentid,
      image: alerts.image,
      username: alerts.username,
      post: alerts.post,
      comment: alerts.comment,
      message: alerts.message,
      postuserid: alerts.postuserid
    })
  }


  updatePost(posts: Posts) {
    this.postListRef.child(posts.$key).update({
      userid: posts.userid,
      content: posts.content,
      hearts: posts.hearts,
      comments: posts.comments
    })
  }

  updatePostTime(posts: Posts) {
    this.postListRef.child(posts.$key).update({
      userid: this.userKey,
      content: posts.content,
      time: posts.time,
      hearts: posts.hearts,
      comments: posts.comments
    })
  }

  getLikePost() {
    return this.firebasedb.list('postlikes');
  }

  deleteLikePost(id: string) {
    return this.postLikeRef.child(id).remove();
  }

  deleteAlert(id: string) {
    return this.alertListRef.child(id).remove();
  }

  deletePost(id: string) {
    return this.postListRef.child(id).remove();
  }

  deleteCategory(id: string) {
    this.categoryListRef.child(id).remove();
  }

  deleteMultiplePost(post: Posts) {
    this.postList.remove(post.$key);
  }

  deleteComment(id: string) {
    this.commentListRef.child(id).remove();
  }

  getSingleLikePost(postlikeid: PostsLikes) {
    return this.firebasedb.object(`postlikes/${postlikeid}`);
  }

  getPost(limit?) {
    return this.firebasedb.list('posts', ref =>
      ref.limitToLast(limit).orderByKey()
    );
  }

  getCategories() {
    return this.firebasedb.list('categories', ref =>
      ref.orderByKey()
    );
  }

  getAlert(limit?) {
    return this.firebasedb.list('alerts', ref =>
      ref.limitToLast(limit).orderByKey()
    );
  }

  getAllUsers() {
    return this.firebasedb.list('users');
  }

  getAlerts() {
    return this.firebasedb.list('alerts');
  }

  getMorePost() {
    return this.firebasedb.list('posts');
  }

  getSinglePost(postid: Posts) {
    return this.firebasedb.object(`posts/${postid}`);
  }

  getSingleAlert(alertid: Alerts) {
    return this.firebasedb.object(`alerts/${alertid}`);
  }

  getSingleComment(commentid: Comments) {
    return this.firebasedb.object(`comments/${commentid}`);
  }

  getComments() {
    return this.firebasedb.list('comments');
  }

  getMoreComments(limit?) {
    return this.firebasedb.list('comments', ref =>
      ref.orderByKey()
    );
  }

  getCommentLastId() {
    return this.firebasedb.list('comments')
  }

  getPostLastId() {
    return this.firebasedb.list('posts', ref =>
      ref.limitToFirst(1).orderByKey()
    )
  }

  getAlertLastId() {
    return this.firebasedb.list('alerts', ref =>
      ref.limitToFirst(1).orderByKey()
    )
  }

  authUser() {
    return this.user;
  }

  get currentUserId(): string {
    return this.authState !== null ? this.authState.user.uid : '';
  }

  login(users: Users) {
    return this.afAuth.auth.signInWithEmailAndPassword(users.email, users.password).then((user) => {
      this.authState = user;
      this.arrayUsers = user;
      users.online = true;
      this.onlineStatus(users);
      var verfiedEmail = user.user.emailVerified;
      var emailVerification = JSON.parse(localStorage.getItem('emailVerification'));
      console.log(emailVerification);

      this.localStorageItem = localStorage.setItem('emailVerification', verfiedEmail.toString());
    })
  }

  updatePoints(user) {
    return this.getUsers(user.user.uid).snapshotChanges().subscribe(item => {
      this.arrayUsers = [];
      var y = item.payload.toJSON();
      y['$key'] = item.key;
      this.userObjects = y;
      this.arrayUsers.push(this.userObjects);
      this.arrayUsers.forEach(res => {
        res.points = res.points + 1;
        console.log(res);
        this.updateUser(res);
      })
    });
  }

  logout() {
    this.afAuth.auth.signOut();
  }

  signUp(users: Users) {
    this.errorMessage = " ";
    return this.afAuth.auth.createUserWithEmailAndPassword(users.email, users.password).then((user) => {
      this.authState = user;
      console.log(this.authState);
      const online = true;
      this.insertUser(users);
      var verfiedEmail = this.authState.user.emailVerified
      this.localStorageItem = localStorage.setItem('emailVerification', verfiedEmail.toString());
      console.log(this.authState);
    }).catch(error => {
      this.errorMessage = error.message;
      console.log(error);
    });
  }

  insertUser(user: Users) {
    const path = `users/${this.currentUserId}`;
    const newUser = {
      username: user.username,
      email: user.email,
      points: user.points,
      image: user.image,
      status: user.status,
      blobFile: user.blobFile,
      online: user.online
    }
    this.firebasedb.object(path).update(newUser);
  }

  onlineStatus(user: Users): void {
    const path = `users/${this.currentUserId}`;
    const newUser = {
      online: user.online
    }
  }


  //UPLOAD IMAGES
  takePhotograph() {
    return new Promise(resolve => {
      this._CAMERA.getPicture(
        {
          destinationType: this._CAMERA.DestinationType.DATA_URL,
          targetWidth: 320,
          targetHeight: 240
        })
        .then((data) => {
          this.cameraImage = "data:image/jpeg;base64," + data;
          resolve(this.cameraImage);
        });
    });
  }

  selectPhotograph() {
    return new Promise(resolve => {
      let cameraOptions: CameraOptions = {
        sourceType: this._CAMERA.PictureSourceType.PHOTOLIBRARY,
        destinationType: this._CAMERA.DestinationType.DATA_URL,
        quality: 100,
        targetWidth: 320,
        targetHeight: 240,
        encodingType: this._CAMERA.EncodingType.JPEG,
        correctOrientation: true
      };

      this._CAMERA.getPicture(cameraOptions)
        .then((data) => {
          this.cameraImage = "data:image/jpeg;base64," + data;
          resolve(this.cameraImage);
        });

    });
  }

  updateUser(user: Users): Promise<any> {
    return this.userListRef.child(user["$key"]).update({
      username: user.username,
      email: user.email,
      points: user.points,
      image: user.image,
      status: user.status,
      blobFile: user.blobFile,
      online: user.online
    }).then(res => {
      this.updateSignIEmail(user.email);
      if (user.blobFile !== "") {
        this.uploadFiles(user);
      }
    })
  }

  updateUser2(user: Users) {
    console.log(user);
    this.userListRef.child(user["$key"]).update({
      username: user.username,
      email: user.email,
      points: user.points,
      image: user.image,
      status: user.status,
      //blobFile: user.blobFile,
      online: user.online
    })
  }


  uploadFiles(uploads: Users) {
    console.log(uploads);
    //if (uploads.blobFile !== "") {
      var fileName = uploads.blobFile.name;
      const storageRef = firebase.storage().ref();
      const uploadTask = storageRef.child(`users/${fileName}`).put(uploads.blobFile);

        uploadTask.on(firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) => {
          /*  uploads.progress = (uploadTask.snapshot.bytesTransferred / uploadTask.snapshot.totalBytes) * 100;
           console.log(uploads.progress); */
        },
        (error) => {
          console.log(error);
        },

        (): any => {
          var pictureUrl = storageRef.child(`users/${fileName}`).getDownloadURL();

          pictureUrl.then(url => {
            uploads.image = url;
            this.saveFileData(uploads);
          })
        }
      )
    //}
  }

  private saveFileData(upload: Users) {
    this.userListRef.child(upload["$key"]).update({
      image: upload.image
    });
  }

}
