import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { AddEditRoomDetailsPage } from './add-edit-room-details/add-edit-room-details';


@IonicPage()
@Component({
  selector: 'page-add-edit-room',
  templateUrl: 'add-edit-room.html',
})
export class AddEditRoomPage {

  roomDetails: AddEditRoomDetailsPage;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AddEditRoomPage');
  }
  addRooms() {
    this.navCtrl.push(AddEditRoomDetailsPage);
  }
}
