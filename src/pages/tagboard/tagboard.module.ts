import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TagboardPage } from './tagboard';

@NgModule({
  declarations: [
    TagboardPage,
  ],
  imports: [
    IonicPageModule.forChild(TagboardPage),
  ],
})
export class TagboardPageModule {}
