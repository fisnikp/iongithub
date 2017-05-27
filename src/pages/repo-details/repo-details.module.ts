import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RepoDetails } from './repo-details';

@NgModule({
  declarations: [
    RepoDetails,
  ],
  imports: [
    IonicPageModule.forChild(RepoDetails),
  ],
  exports: [
    RepoDetails
  ]
})
export class RepoDetailsModule {}
