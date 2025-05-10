import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { DiaryComponent } from './pages/diary/diary.component';
import { RecommendationsComponent } from './pages/recommendations/recommendations.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { BreathingComponent } from './breathing/breathing.component';
import { MemoryGameComponent } from './memory-game/memory-game.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'diary', component: DiaryComponent },
  { path: 'recommendations', component: RecommendationsComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path:'breathing', component:BreathingComponent},
  { path: 'memory-game', component: MemoryGameComponent },
  {path:'profile',component:ProfileComponent},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
