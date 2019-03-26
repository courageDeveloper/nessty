import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { WallPage } from './wall';
import {Clipboard} from 'ts-clipboard';
import { Toast } from '@ionic-native/toast/ngx';

@NgModule({
  declarations: [
    WallPage,
  ],
  imports: [
    IonicPageModule.forChild(WallPage),
  ],
  providers: [
    Clipboard,
    Toast
  ]
})
export class WallPageModule {}
