import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { TrainliveComponent } from './trainlive/trainlive.component';
import { LoginComponent } from './login/login.component';
import { TimerComponent } from './timer/timer.component';
import { MapComponent } from './map/map.component';

const routes: Routes = [
{path: '', component: HomeComponent},
{path: 'trainlive', component: TrainliveComponent},
{path: 'login', component: LoginComponent},
{path: 'timer', component: TimerComponent, canActivate: [LoginComponent] },
{path: 'map', component: MapComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [LoginComponent]
})
export class AppRoutingModule { }
