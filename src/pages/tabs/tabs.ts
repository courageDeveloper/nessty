import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { FirebaseServiceProvider } from '../../providers/firebase-service';

/**
 * Generated class for the TabsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html',
})
export class TabsPage {
  // set the root pages for each tab
  tab1Root: any = 'WallPage';
  tab2Root: any = 'AlertsPage';
  tab3Root: any = 'ProfilePage';
  tab4Root: any = 'BoardsPage';
  mySelectedIndex: number;
  arrayItems;
  arrayItemsLength;
  show = false;

  constructor(public navCtrl: NavController, public navParams: NavParams, private firebaseService: FirebaseServiceProvider) {
    this.mySelectedIndex = navParams.data.tabIndex || 0;
  }

  ionViewDidEnter() {
    this.firebaseService.getAlerts().snapshotChanges().subscribe(items => {
      this.arrayItems = [];
      items.forEach(item => {
        var y = item.payload.toJSON();
        y['$key'] = item.key;
        this.arrayItems.push(y);
      })

      this.arrayItems = this.arrayItems.filter(data => data.status == true && data.postuserid == this.firebaseService.userKey);
      this.arrayItemsLength = this.arrayItems.length;
      this.arrayItems.forEach(res => {
        if (res.status == true) {
          this.show = true;
        }
      })
    })

  }
  


}
