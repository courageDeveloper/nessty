import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { MyApp } from './app.component';
import { HttpModule} from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Camera } from '@ionic-native/camera';
import { ToastService } from '../services/toast-service';
import { LoadingService } from '../services/loading-service';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule, AngularFireDatabase } from '@angular/fire/database';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { TooltipsModule } from 'ionic-tooltips';
import { SocialSharing } from '@ionic-native/social-sharing';
import { IonicImageViewerModule } from 'ionic-img-viewer';
import { FirebaseServiceProvider } from '../providers/firebase-service';
import { processRecords } from 'ionic-angular/umd/components/virtual-scroll/virtual-util';

export const firebaseConfig = {
  apiKey: "AIzaSyAvmO6mCpbRBgIyMNub0iZncrwzXNLGtfA",
  authDomain: "nessty-be23f.firebaseapp.com",
  databaseURL: "https://nessty-be23f.firebaseio.com",
  projectId: "nessty-be23f",
  storageBucket: "nessty-be23f.appspot.com",
  messagingSenderId: "744746575299"
};


@NgModule({
  declarations: [
    MyApp
  ],
  imports: [
    BrowserModule,
    HttpModule,
    HttpClientModule,
    IonicImageViewerModule,
    TooltipsModule,
    BrowserAnimationsModule,
    IonicModule.forRoot(MyApp),
    AngularFireModule.initializeApp(firebaseConfig),
    AngularFireDatabaseModule,
    AngularFireAuthModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
  providers: [
    StatusBar,
    SplashScreen,
    ToastService,
    LoadingService,
    Camera,
    SocialSharing,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    FirebaseServiceProvider
  ]
})
export class AppModule { }

