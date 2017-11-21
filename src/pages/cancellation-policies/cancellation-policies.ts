import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { CancellationPoliciesDetailsPage } from './cancellation-policies-details/cancellation-policies-details';

@IonicPage()
@Component({
  selector: 'page-cancellation-policies',
  templateUrl: 'cancellation-policies.html',
})
export class CancellationPoliciesPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CancellationPoliciesPage');
  }

  addPolicy(){
    this.navCtrl.push(CancellationPoliciesDetailsPage);
  }

}