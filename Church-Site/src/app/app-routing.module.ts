import { TodayliveComponent } from './todaylive/todaylive.component';
import { OnlinepaymentComponent } from './onlinepayment/onlinepayment.component';
import { RequestsComponent } from './requests/requests.component';
import { OurfathersinfoComponent } from './ourfathersinfo/ourfathersinfo.component';
import { PopeKyrollosInfoComponent } from './pope-kyrollos-info/pope-kyrollos-info.component';
import { ChurchMoreInfoComponent } from './church-more-info/church-more-info.component';
import { HomepageComponent } from './homepage/homepage.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {path:'',component:HomepageComponent},
  {path:'church-more-info',component:ChurchMoreInfoComponent},
  {path:'pope-info',component:PopeKyrollosInfoComponent},
  {path:'ourfathers',component:OurfathersinfoComponent},
  {path:'requests',component:RequestsComponent},
  {path:'payment',component:OnlinepaymentComponent},
  {path:'todaylive',component:TodayliveComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
