import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ProfilePage } from './profile';
import {Clipboard} from 'ts-clipboard';
import { Toast } from '@ionic-native/toast/ngx';
import { IonicImageViewerModule } from 'ionic-img-viewer';

@NgModule({
  declarations: [
    ProfilePage,
  ],
  imports: [
    IonicPageModule.forChild(ProfilePage),
    IonicImageViewerModule
  ],
  providers: [
    Clipboard,
    Toast
  ]
})
export class ProfilePageModule {}
