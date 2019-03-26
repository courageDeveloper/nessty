import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { FirstpostPage } from './firstpost';

@NgModule({
  declarations: [
    FirstpostPage,
  ],
  imports: [
    IonicPageModule.forChild(FirstpostPage),
  ],
})
export class FirstpostPageModule {}
