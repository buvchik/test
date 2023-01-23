import {Component, OnInit, ViewChild} from '@angular/core';
import {User} from "../../model/User";
import {MatTableDataSource} from "@angular/material/table";
import {MatPaginator} from "@angular/material/paginator";
import {MatDialog, MatDialogConfig} from "@angular/material/dialog";
import {InfoComponent} from "../info/info.component";
import {AddComponent} from "../add/add.component";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit{

  columnsToDisplay = ['first_name', 'last_name', 'email','picture'];
  allItems:User[] = [
    {

      "first_name": "Bird",
      "last_name": "Ramsey",
      "email": "Ramsey@nimon.com",
      "picture": "http://placehold.it/32x32",
      "hobbies": "Here goes free text describing user hobbies.Here goes free text describing user hobbies.Here goes free text describing user hobbies.Here goes free text describing user hobbies.Here goes free text describing user hobbies.Here goes free text describing user hobbies.Here goes free text describing user hobbies.Here goes free text describing user hobbies.Here goes free text describing user hobbies.Here goes free text describing user hobbies.Here goes free text describing user hobbies.",
      "company": "NIMON"
    },
    {

      "first_name": "Koly",
      "last_name": "Popov",
      "email": "Popov@nimon.com",
      "picture": "http://placehold.it/32x32",
      "hobbies": "Here goes free text describing user hobbies.Here goes free text describing user hobbies.Here goes free text describing user hobbies.Here goes free text describing user hobbies.Here goes free text describing user hobbies.Here goes free text describing user hobbies.Here goes free text describing user hobbies.Here goes free text describing user hobbies.Here goes free text describing user hobbies.Here goes free text describing user hobbies.Here goes free text describing user hobbies.",
      "company": "NIMON"
    },
    {

      "first_name": "Sasha",
      "last_name": "Lorkin",
      "email": "Lorkin@nimon.com",
      "picture": "http://placehold.it/32x32",
      "hobbies": "Here goes free text describing user hobbies.Here goes free text describing user hobbies.Here goes free text describing user hobbies.Here goes free text describing user hobbies.Here goes free text describing user hobbies.Here goes free text describing user hobbies.Here goes free text describing user hobbies.Here goes free text describing user hobbies.Here goes free text describing user hobbies.Here goes free text describing user hobbies.Here goes free text describing user hobbies.",
      "company": "NIMON"
    },
    {

      "first_name": "Fedia",
      "last_name": "Delik",
      "email": "Delik@nimon.com",
      "picture": "http://placehold.it/32x32",
      "hobbies": "Here goes free text describing user hobbies.Here goes free text describing user hobbies.Here goes free text describing user hobbies.Here goes free text describing user hobbies.Here goes free text describing user hobbies.Here goes free text describing user hobbies.Here goes free text describing user hobbies.Here goes free text describing user hobbies.Here goes free text describing user hobbies.Here goes free text describing user hobbies.Here goes free text describing user hobbies.",
      "company": "NIMON"
    },
    {

      "first_name": "Fedor",
      "last_name": "Kuk",
      "email": "Kuk@nimon.com",
      "picture": "http://placehold.it/32x32",
      "hobbies": "Here goes free text describing user hobbies.Here goes free text describing user hobbies.Here goes free text describing user hobbies.Here goes free text describing user hobbies.Here goes free text describing user hobbies.Here goes free text describing user hobbies.Here goes free text describing user hobbies.Here goes free text describing user hobbies.Here goes free text describing user hobbies.Here goes free text describing user hobbies.Here goes free text describing user hobbies.",
      "company": "NIMON"
    },
    {

      "first_name": "Leha",
      "last_name": "Jmot",
      "email": "Jmot@nimon.com",
      "picture": "http://placehold.it/32x32",
      "hobbies": "Here goes free text describing user hobbies.Here goes free text describing user hobbies.Here goes free text describing user hobbies.Here goes free text describing user hobbies.Here goes free text describing user hobbies.Here goes free text describing user hobbies.Here goes free text describing user hobbies.Here goes free text describing user hobbies.Here goes free text describing user hobbies.Here goes free text describing user hobbies.Here goes free text describing user hobbies.",
      "company": "NIMON"
    },
    {

      "first_name": "Nora",
      "last_name": "Gluboka",
      "email": "Gluboka@nimon.com",
      "picture": "http://placehold.it/32x32",
      "hobbies": "Here goes free text describing user hobbies.Here goes free text describing user hobbies.Here goes free text describing user hobbies.Here goes free text describing user hobbies.Here goes free text describing user hobbies.Here goes free text describing user hobbies.Here goes free text describing user hobbies.Here goes free text describing user hobbies.Here goes free text describing user hobbies.Here goes free text describing user hobbies.Here goes free text describing user hobbies.",
      "company": "NIMON"
    },
    {

      "first_name": "Denis",
      "last_name": "Logkin",
      "email": "Logkin@nimon.com",
      "picture": "http://placehold.it/32x32",
      "hobbies": "Here goes free text describing user hobbies.Here goes free text describing user hobbies.Here goes free text describing user hobbies.Here goes free text describing user hobbies.Here goes free text describing user hobbies.Here goes free text describing user hobbies.Here goes free text describing user hobbies.Here goes free text describing user hobbies.Here goes free text describing user hobbies.Here goes free text describing user hobbies.Here goes free text describing user hobbies.",
      "company": "NIMON"
    },
    {

      "first_name": "Kristie",
      "last_name": "Cole",
      "email": "kristiecole@quadeebo.com",
      "picture": "http://placehold.it/32x32",
      "hobbies": "Here goes free text describing user hobbies.Here goes free text describing user hobbies.Here goes free text describing user hobbies.Here goes free text describing user hobbies.Here goes free text describing user hobbies.Here goes free text describing user hobbies.Here goes free text describing user hobbies.Here goes free text describing user hobbies.Here goes free text describing user hobbies.Here goes free text describing user hobbies.Here goes free text describing user hobbies.",
      "company": "QUADEEBO"
    }
  ]

  getItems() {
    return this.allItems
  }
  constructor(public matDialog: MatDialog) { }
  onInfoClicked(user:User) {
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "35%";
    dialogConfig.width = "30%";
    dialogConfig.data = user;
    const modalDialog = this.matDialog.open(InfoComponent, dialogConfig);

  }
  onDeleteClicked(row:number) {
    this.allItems.splice(row,1);
    console.log('Delete clicked: ', row);
  }

  clickAddNew(){
    const dialogConfig = new MatDialogConfig();
    dialogConfig.disableClose = false;
    dialogConfig.id = "modal-component";
    dialogConfig.height = "35%";
    dialogConfig.width = "30%";
    const modalDialog = this.matDialog.open(AddComponent, dialogConfig);
  }

//create pagination
  dataSourceWithPageSize = new MatTableDataSource(this.allItems);
  @ViewChild('paginatorPageSize', {static: true}) paginatorPageSize!: MatPaginator;
  pageSizes = [3, 5, 9];
  ngOnInit(): void {
    this.dataSourceWithPageSize.paginator = this.paginatorPageSize;
  }

}
