import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewpostPage } from './viewpost';

@NgModule({
  declarations: [
    ViewpostPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewpostPage),
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class ViewpostPageModule {}
