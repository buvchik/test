import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {MatTableModule} from "@angular/material/table";
import {MatPaginatorModule} from "@angular/material/paginator";
import {MatListModule} from "@angular/material/list";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import { AddComponent } from './pages/add/add.component';
import { InfoComponent } from './pages/info/info.component';
import { HomeComponent } from './pages/home/home.component';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import {MatInputModule} from "@angular/material/input";
import {MatCardModule} from "@angular/material/card";


@NgModule({
  declarations: [
    AppComponent,
    AddComponent,
    InfoComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatTableModule,
    MatPaginatorModule,
    MatListModule,
    BrowserAnimationsModule,
    MatDialogModule,
    MatInputModule,
    MatCardModule
  ],
  providers: [{provide: MatDialogRef,useValue:{}}],
  bootstrap: [AppComponent],
})
export class AppModule { }
