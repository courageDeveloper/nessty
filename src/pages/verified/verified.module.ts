import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { verifiedPage } from './verified';

@NgModule({
  declarations: [
    verifiedPage,
  ],
  imports: [
    IonicPageModule.forChild(verifiedPage),
  ],
})
export class verifiedPageModule {}
