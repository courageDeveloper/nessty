import { Component } from '@angular/core';
import { IonicPage, ViewController, ModalController, NavController, LoadingController, NavParams } from 'ionic-angular';
import { HttpService } from '../../services/HttpService';
import { catchError } from 'rxjs/operators';

/**
 * Generated class for the TagboardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-tagboard',
  templateUrl: 'tagboard.html',
  providers: [HttpService]
})
export class TagboardPage {
  boards = [];
  green;
  blue;
  black
  purple;
  orange;
  red;
  boundClass;
  apiData;
  errorMessage;
  colors;
  catObject = {};
  categories = [];
  catArray;

  constructor(public navCtrl: NavController, public loadingCtrl: LoadingController, public httpService: HttpService, public modalCtrl: ModalController, public navParams: NavParams, public viewCtrl: ViewController) {
  }

  ionViewDidLoad() {
    this.red = true;
    this.orange = true;
    this.green = true;
    this.black = true;
    this.purple = true;

    console.log('ionViewDidLoad TagboardPage');
    /*  this.boards = [{image:"assets/images/dark-1.jpg",name:"Physical Health",color:"green"},{image:"assets/images/Home-Default.jpg",name:"Dating",color:"blue"},
       {image:"assets/images/dark-3.jpg",name:"Anxiety",color:"red"},{image:"assets/images/dark-2.jpg",name:"Depression",color:"orange"},{image:"assets/images/light-3.jpg",name:"Kinetics",color:"purple"}
    ]
 */
    let loading = this.loadingCtrl.create({
      content: 'Please wait...'
    });
    loading.present();
    this.httpService.getCategories().pipe(catchError((err) => { this.errorMessage = err; console.log(err); loading.dismiss(); throw err })).subscribe(res => {
      this.colors = ["green", "black", "green", "black", "green", "black", "green", "black", "green", "black", "green", "black", "green", "black",
      ];
      console.log(this.colors);
      var apiResponse = [];
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
          color: this.colors,
          togglestatus: false
        }
        this.categories.push(this.catObject);
        console.log(this.categories);

        for (var i = 0; i < this.categories.length; i++) {
          this.categories[i].color = this.colors[i];
        }
      })
      setTimeout(function () {
        loading.dismiss();
      }, 1000);
    })


    this.boundClass = {
      green: this.green,
      red: this.red,
      black: this.black,
      orange: this.orange,
      purple: this.purple
    }
  }

  closePost() {
    this.viewCtrl.dismiss();
  }

  getName(board) {
    this.viewCtrl.dismiss(board);
    /*  let modal = this.modalCtrl.create('PostPage',{board:board});
    modal.onDidDismiss((board) => {
      if (board) {
        console.log(board)
      }
    })
    modal.present(); */
  }

}
