import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ViewpicPage } from './viewpic';
import { IonicImageViewerModule } from 'ionic-img-viewer';

@NgModule({
  declarations: [
    ViewpicPage,
  ],
  imports: [
    IonicPageModule.forChild(ViewpicPage),
    IonicImageViewerModule
  ],
})
export class ViewpicPageModule {}
