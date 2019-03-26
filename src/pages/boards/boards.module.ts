import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BoardsPage } from './boards';
import {Clipboard} from 'ts-clipboard';
import { Toast } from '@ionic-native/toast/ngx';

@NgModule({
  declarations: [
    BoardsPage,
  ],
  imports: [
    IonicPageModule.forChild(BoardsPage),
  ],
  providers: [
    Clipboard,
    Toast
  ]
})
export class BoardsPageModule {}
