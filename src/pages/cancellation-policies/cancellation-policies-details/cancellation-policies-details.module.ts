import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CancellationPoliciesDetailsPage } from './cancellation-policies-details';

@NgModule({
  declarations: [
    CancellationPoliciesDetailsPage,
  ],
  imports: [
    IonicPageModule.forChild(CancellationPoliciesDetailsPage),
  ],
})
export class CancellationPoliciesDetailsPageModule {}
