import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AddComponent} from "./pages/add/add.component";
import {InfoComponent} from "./pages/info/info.component";
import {HomeComponent} from "./pages/home/home.component";

const routes:Routes=[
  { path: '', component: HomeComponent},
  {path:'add',component: AddComponent},
  {path:'info',component: InfoComponent}
]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
