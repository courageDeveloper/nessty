import { Component } from '@angular/core';
import { Http, Headers } from '@angular/http';
import { IonicPage, ModalController, NavController, NavParams, AlertController, Platform, LoadingController } from 'ionic-angular';
import { HttpService } from '../../services/HttpService';
import { catchError } from 'rxjs/operators';
import { map } from 'rxjs/operators';
import { FirebaseServiceProvider } from '../../providers/firebase-service';
import { Observable } from 'rxjs/Rx';
import { SocialSharing } from '@ionic-native/social-sharing';
import { Clipboard } from 'ts-clipboard';
import { ToastController } from 'ionic-angular';


/**
 * Generated class for the BoardsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-boards',
  templateUrl: 'boards.html',
  providers: [HttpService]
})
export class BoardsPage {
  images = [];
  active = false;
  myClass;
  overlay;
  boardsObjArray = [];
  boardsArrays = [];
  boardsItems;
  boardsAttachment;
  boardsLink;
  boardsTitle;
  attachmentLink;
  imageLink;
  imageArray = [];
  boardObject = {};
  boardsCategory;
  errorMessage;
  apiData;
  catObject = {};
  boardsArrayLimit = [];
  maximumPages;
  image;
  attachmentArray;
  catArray;
  categories = [];
  catIdArray;
  page = 1;
  loading = this.loadingCtrl.create({
    content: 'Please wait...'
  });

  constructor(public navCtrl: NavController, public toastController: ToastController, public clipboard: Clipboard, private alrtctrl: AlertController, private platform: Platform, private socialSharing: SocialSharing, private firebaseService: FirebaseServiceProvider, public navParams: NavParams, public httpService: HttpService, public modalCtrl: ModalController, public loadingCtrl: LoadingController, private http: Http) {

  }

  ionViewDidLoad(infiniteScroll) {
    console.log('ionViewDidLoad BoardsPage');
    this.loadPosts();
    this.loadCategories();
  }

  loadCategories(infiniteScroll?) {

    this.firebaseService.getCategories().snapshotChanges().subscribe(items => {
      this.catArray = [];
      items.forEach(item => {
        var y = item.payload.toJSON();
        y['$key'] = item.key;
        this.catArray.push(y);
        this.catArray = this.catArray.filter(data => data.userid == this.firebaseService.userKey);
      })
      console.log(this.httpService.getCategories());
      if (this.catArray.length == 0) {
        this.httpService.getCategories().pipe(catchError((err) => { this.errorMessage = err; console.log(err); throw err })).subscribe(res => {
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
            console.log(this.categories);

            for (var i = 0; i < this.categories.length; i++) {
              this.categories[i].image = this.images[i];
            }

          })
        })
      }
      else {
        this.categories = this.catArray;
      }
    })

  }

  loadPosts(infiniteScroll?) {
    this.firebaseService.getCategories().snapshotChanges().subscribe(items => {
      this.catArray = [];
      items.forEach(item => {
        var y = item.payload.toJSON();
        y['$key'] = item.key;
        this.catArray.push(y);
        this.catArray = this.catArray.filter(data => data.userid == this.firebaseService.userKey);
      })
    })

    this.loading.present();
    this.httpService.getBoards().pipe(catchError((err) => { this.errorMessage = err; console.log(err); this.loading.dismiss(); throw err })).subscribe(res => {
      if (this.catArray == undefined || this.catArray.length == 0) {
        var boardsArrays = []
        boardsArrays = boardsArrays.concat(res);
        if (infiniteScroll) {
          infiniteScroll.complete();
        }

        boardsArrays.map(res => {

          this.boardsItems = res;
          if (this.boardsItems._links["wp:featuredmedia"] === undefined) {

            var attachArray = {
              embedded: true,
              href: "https://www.healthbootcamps.com/wp-json/wp/v2/media/14114"
            }

            this.boardsItems._links["wp:featuredmedia"] = [];
            this.boardsItems._links["wp:featuredmedia"].push(attachArray);
          }

          var categoryBoard = this.boardsItems.categories;
          var boardsTitle = this.boardsItems.title.rendered;
          var boardsLink = this.boardsItems.guid.rendered;
          this.attachmentArray = [];

          this.boardsAttachment = this.boardsItems._links["wp:featuredmedia"];
          if (this.boardsAttachment !== undefined) {

            this.boardsAttachment.map(data => {

              this.attachmentLink = data.href;
              let headers = new Headers();
              headers.append('Content-Type', 'application/json');
              return this.http.get(this.attachmentLink, { headers: headers }).pipe(map(res => res.json())).subscribe(res => {
                this.imageLink = res.guid.rendered;
                this.boardObject = {
                  title: boardsTitle,
                  link: boardsLink,
                  image: this.imageLink,
                  category: categoryBoard
                }
                this.boardsObjArray.push(this.boardObject);

              })
            })
          }
        })
        setTimeout(() => {
          this.loading.dismiss();
        }, 10000);
      }
      else {
        this.getSelectedApi();
      }
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
  }

  getConcat(total, sum) {
    return total + sum;
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

  getSelectedApi(infiniteScroll?) {
    this.firebaseService.getCategories().snapshotChanges().subscribe(items => {
      this.catArray = [];
      items.forEach(item => {
        var y = item.payload.toJSON();
        y['$key'] = item.key;
        this.catArray.push(y);
        this.catArray = this.catArray.filter(data => data.userid == this.firebaseService.userKey);
      })

      var catIdArray = [];
      this.catArray.forEach(res => {
        var catId = res.categoryid.toString() + '+' + '0';
        catIdArray.push(catId);
      })
      this.catIdArray = catIdArray.reduce(this.getConcat);
      return this.getSelectedCat(this.catIdArray).pipe(catchError((err) => { this.errorMessage = err; console.log(err); this.loading.dismiss(); throw err })).subscribe(res => {

        var boardsArrays = []
        boardsArrays = boardsArrays.concat(res);

        if (infiniteScroll) {
          infiniteScroll.complete();
        }

        boardsArrays.map(res => {
          this.boardsItems = res;
          if (this.boardsItems._links["wp:featuredmedia"] === undefined) {
            var attachArray = {
              embedded: true,
              href: "https://www.healthbootcamps.com/wp-json/wp/v2/media/14114"
            }

            this.boardsItems._links["wp:featuredmedia"] = [];
            this.boardsItems._links["wp:featuredmedia"].push(attachArray);
          }
          var categoryBoard = this.boardsItems.categories;
          var boardsTitle = this.boardsItems.title.rendered;
          var boardsLink = this.boardsItems.guid.rendered;
          this.attachmentArray = [];

          this.boardsAttachment = this.boardsItems._links["wp:featuredmedia"];
          if (this.boardsAttachment !== undefined) {
            this.boardsAttachment.map(data => {
              this.attachmentLink = data.href;
              let headers = new Headers();
              headers.append('Content-Type', 'application/json');
              return this.http.get(this.attachmentLink, { headers: headers }).pipe(map(res => res.json())).subscribe(res => {
                this.imageLink = res.guid.rendered;
                this.boardObject = {
                  title: boardsTitle,
                  link: boardsLink,
                  image: this.imageLink,
                  category: categoryBoard
                }
                this.boardsObjArray.push(this.boardObject);
              })
            })
          }
        })
        setTimeout(() => {
          this.loading.dismiss();
        }, 10000);
      })
    })

  }

  getSelectedCat(catIds) {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(`https://www.healthbootcamps.com/wp-json/wp/v2/posts?page=${this.page}&categories=${catIds}`, { headers: headers })
      .pipe(map(res => res.json())).pipe(catchError((err) => {
        this.errorMessage = err.json();
        console.log(err.json());
        throw err;
      }));
  }

  getSelectedHeader(catIds): Observable<any> {
    let headers = new Headers();
    headers.append('Content-Type', 'application/json');
    return this.http.get(`https://www.healthbootcamps.com/wp-json/wp/v2/posts?page=${this.page}&categories=${catIds}`, { headers: headers })
      .pipe(catchError((err) => {
        this.errorMessage = err.json();
        console.log(err.json());
        throw err;
      }));

  }

  loadMore(infiniteScroll) {
    this.httpService.page++;
    this.firebaseService.getCategories().snapshotChanges().subscribe(items => {
      this.catArray = [];
      items.forEach(item => {
        var y = item.payload.toJSON();
        y['$key'] = item.key;
        this.catArray.push(y);
        this.catArray = this.catArray.filter(data => data.userid == this.firebaseService.userKey);
      })
    })

    this.httpService.getBoards().pipe(catchError((err) => { this.errorMessage = err; console.log(err); throw err })).subscribe(res => {
      if (this.catArray == undefined || this.catArray.length == 0) {
        var boardsArrays = []
        boardsArrays = boardsArrays.concat(res);

        if (infiniteScroll) {
          infiniteScroll.complete();
        }

        boardsArrays.map(res => {
          this.boardsItems = res;
          var categoryBoard = this.boardsItems.categories;
          var boardsTitle = this.boardsItems.title.rendered;
          var boardsLink = this.boardsItems.guid.rendered;
          this.boardsAttachment = this.boardsItems._links["wp:featuredmedia"];
          if (this.boardsAttachment !== undefined) {
            this.boardsAttachment.map(data => {
              this.attachmentLink = data.href;
              let headers = new Headers();
              headers.append('Content-Type', 'application/json');
              return this.http.get(this.attachmentLink, { headers: headers }).pipe(map(res => res.json())).subscribe(res => {
                this.imageLink = res.guid.rendered;
                this.boardObject = {
                  title: boardsTitle,
                  link: boardsLink,
                  image: this.imageLink,
                  category: categoryBoard
                }
                this.boardsObjArray.push(this.boardObject);

              })
            })
          }
        })
      }
      else {
        this.getSelectedApi();
      }
    })
    if (this.catArray == undefined || this.catArray.length == 0) {
      this.httpService.getHeaders().subscribe((response: Response) => {
        var maximumPages = Number(response.headers["_headers"].get("x-wp-totalpages")[0]);


        if (this.httpService.page === maximumPages) {
          infiniteScroll.enable(false);
        }
      })
    }
    else {
      var catIdArray = [];
      this.catArray.forEach(res => {
        var catId = res.categoryid.toString() + '+' + '0';
        catIdArray.push(catId);
      })
      this.catIdArray = catIdArray.reduce(this.getConcat);
      this.getSelectedHeader(this.catIdArray).subscribe((response: Response) => {
        var maximumNumber = Number(response.headers["_headers"].get("x-wp-total")[0]);
        var maximumPages = Number(response.headers["_headers"].get("x-wp-totalpages")[0]);
        if (this.page === maximumPages) {
          infiniteScroll.enable(false);
        }
      })
    }


  }

  ionViewDidEnter() {

  }

  reload() {
    this.navCtrl.push('BoardsPage');
  }

  navEditBoard() {
    let modal = this.modalCtrl.create('BoardselectPage');
    modal.onDidDismiss((data) => {
      console.log(data);
    })
    modal.present();
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

}
