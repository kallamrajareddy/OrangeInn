import { LoginPage } from '../pages/login/login';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { CalendarModule } from "ion2-calendar";

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { AuthServices } from "./../authservice/auth-service";
import { submissonStore } from '../store/submissionStore';
import { HotelCreationPage } from './../pages/hotel-creation/hotel-creation';
import { LogOffPage } from './../pages/log-off/log-off';
import { AddEditRoomPage } from './../pages/add-edit-room/add-edit-room';
import { AddEditRoomDetailsPage } from './../pages/add-edit-room/add-edit-room-details/add-edit-room-details';
import { HotelDetailCreationPage } from './../pages/hotel-detail-creation/hotel-detail-creation';
import { CancellationPoliciesPage } from './../pages/cancellation-policies/cancellation-policies';
import { CancellationPoliciesDetailsPage } from './../pages/cancellation-policies/cancellation-policies-details/cancellation-policies-details';




import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    LoginPage,
    HotelCreationPage,
    LogOffPage,
    HotelDetailCreationPage,
    AddEditRoomPage,
    AddEditRoomDetailsPage,
    CancellationPoliciesPage,
    CancellationPoliciesDetailsPage
  ],
  imports: [
    BrowserModule,
    CalendarModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    HotelCreationPage,
    LogOffPage,
    HotelDetailCreationPage,
    AddEditRoomPage,
    AddEditRoomDetailsPage,
    CancellationPoliciesPage,
    CancellationPoliciesDetailsPage

  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    AuthServices,
    submissonStore
  ]
})
export class AppModule {}
