import {Component, Inject, OnInit} from '@angular/core';
import {User} from "../../model/User";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-info',
  templateUrl: './info.component.html',
  styleUrls: ['./info.component.css']
})
export class InfoComponent implements OnInit {
  user!: User

  constructor(@Inject(MAT_DIALOG_DATA) public data: any) {
  }

  ngOnInit(): void {
    this.user = this.data
    var user_info = document.getElementById('user_info');
    user_info!.innerText = "User info for " + this.user.first_name + " " + this.user.last_name;
    var first_name = document.getElementById('first_name');
    first_name!.innerText = "First name: " + this.user.first_name;
    var last_name = document.getElementById('last_name');
    last_name!.innerText = "Last name: " + this.user.last_name;
    var email = document.getElementById('email');
    email!.innerText = "email: " + this.user.email;
    var hobbies = document.getElementById('hobbies');
    hobbies!.innerText =  this.user.hobbies}

  onClickBack() {
  }
}
