import { Component } from '@angular/core';
import { IonicPage, ViewController, NavController, NavParams, LoadingController } from 'ionic-angular';
import { HttpService } from '../../services/HttpService';
import { catchError } from 'rxjs/operators';
import {map} from 'rxjs/operators';
import { FirebaseServiceProvider } from '../../providers/firebase-service';

/**
 * Generated class for the BoardselectPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-boardselect',
  templateUrl: 'boardselect.html',
  providers: [HttpService]
})
export class BoardselectPage {
  categories = [];
  apiResponse = [];
  catObject = {};
  images = [];
  image;
  img;
  apiData;
  errorMessage;
  catArray;

  constructor(public navCtrl: NavController, private firebaseService: FirebaseServiceProvider, public httpService: HttpService, public loadingCtrl: LoadingController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    this.firebaseService.getCategories().snapshotChanges().subscribe(items => {
      this.catArray = [];
      items.forEach(item => {
        var y = item.payload.toJSON();
        y['$key'] = item.key;
        this.catArray.push(y);
        this.catArray = this.catArray.filter(data => data.userid == this.firebaseService.userKey);
      })
    })
    console.log('ionViewDidLoad BoardselectPage');
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
          image: this.image,
          togglestatus: false
        }
        this.categories.push(this.catObject);

        for (var i = 0; i < this.categories.length; i++) {
          this.categories[i].image = this.images[i];
        }
        for (var j = 0; j < this.catArray.length; j++) {
          for (var i = 0; i < this.categories.length; i++) {
            if (this.catArray[j].categoryid == this.categories[i].id) {
              this.categories[i].togglestatus = this.catArray[j].togglestatus;
            }
          }
        }

      })
      setTimeout(function () {
        loading.dismiss();
      }, 1000);
    })

  }

  getName(cat, event) {
    console.log(cat);
    cat["togglestatus"] = event;
    if (event == true) {
      this.firebaseService.categoryRef(cat);
    }
    else if (event == false) {
      this.firebaseService.deleteCategory(cat.id + this.firebaseService.userKey);
    }
  }

  closePost() {
    this.viewCtrl.dismiss();
  }

}
