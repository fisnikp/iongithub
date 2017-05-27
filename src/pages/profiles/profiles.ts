import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { GithubService } from '../../providers/github-service';
/**
 * Generated class for the Profiles page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-profiles',
  templateUrl: 'profiles.html',
})
export class Profiles{

  profiles: any;
  repos: any;
  github_user = "";

  constructor(public navCtrl: NavController, public navParams: NavParams, private githubService: GithubService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad Profiles');
  }

  onSubmit(){
    this.getProfile(this.github_user);
    this.github_user = '';
  }

  reset() {
    this.profiles = '';
    this.github_user = '';
  }

  showRepos(github_user){
    this.getRepos(github_user);
  }

  getProfile(username) {
    this.githubService.getProfile(username).subscribe(response => {
      this.profiles = response;
      console.log(this.profiles);
    })
  }

  getRepos(username){
    this.githubService.getRepos(username).subscribe(response =>{
      this.repos = response;
      console.log(this.repos);
    })
  }

}
