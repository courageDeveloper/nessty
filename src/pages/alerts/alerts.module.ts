import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AlertsPage } from './alerts';
import {Clipboard} from 'ts-clipboard';
import { Toast } from '@ionic-native/toast/ngx';

@NgModule({
  declarations: [
    AlertsPage,
  ],
  imports: [
    IonicPageModule.forChild(AlertsPage),
  ],
  providers: [
    Clipboard,
    Toast
  ]
})
export class AlertsPageModule {}
