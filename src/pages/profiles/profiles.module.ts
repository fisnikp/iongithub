import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { Profiles } from './profiles';

@NgModule({
  declarations: [
    Profiles,
  ],
  imports: [
    IonicPageModule.forChild(Profiles),
  ],
  exports: [
    Profiles
  ]
})
export class ProfilesModule {}
