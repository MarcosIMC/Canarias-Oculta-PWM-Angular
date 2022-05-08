import {Component, OnInit, ViewChild} from '@angular/core';
import {JsonService} from "../../services/json.service";
import { AuthService } from "../../services/auth.service";
import {SignInComponent} from "../../components/sign-in/sign-in.component";
import {User} from "../../class/user";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
  providers:[JsonService]
})
export class UserComponent implements OnInit {
  private jsonService: JsonService;
  logged?:boolean
  user?:any;
  userData?:any;
  constructor(jsonService:JsonService, public authService: AuthService) {
    this.jsonService = jsonService;
  }

  ngOnInit(): void {

    this.logged = this.authService.isLoggedIn;
    if (this.authService.isLoggedIn){
        this.user = JSON.parse(localStorage.getItem('user')!);
        this.GetUser();
    }
  }

  async GetUser(){
    alert(this.user.uid);
    this.userData = await this.authService.GetUserData(this.user.uid);
  }

  getMyArticles() {
    return this.jsonService.getArticles();
  }

}
