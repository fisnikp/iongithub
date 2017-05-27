import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the RepoDetails page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-repo-details',
  templateUrl: 'repo-details.html',
})
export class RepoDetails {
  selectedRepo: any;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.selectedRepo = navParams.get('repo');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RepoDetails');
  }

}
