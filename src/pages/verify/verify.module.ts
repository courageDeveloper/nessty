import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { verifyPage } from './verify';

@NgModule({
  declarations: [
    verifyPage,
  ],
  imports: [
    IonicPageModule.forChild(verifyPage),
  ],
})
export class verifyPageModule {}
