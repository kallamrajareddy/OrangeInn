import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CancellationPoliciesPage } from './cancellation-policies';

@NgModule({
  declarations: [
    CancellationPoliciesPage,
  ],
  imports: [
    IonicPageModule.forChild(CancellationPoliciesPage),
  ],
})
export class CancellationPoliciesPageModule {}
