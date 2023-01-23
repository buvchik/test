import {Component, Inject, OnInit} from '@angular/core';
import {User} from "../../model/User";
import {MAT_DIALOG_DATA} from "@angular/material/dialog";

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent {
  constructor(@Inject(MAT_DIALOG_DATA) public data: any) { }

}
