import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { FormsModule } from '@angular/forms';

import { HomeComponent } from './pages/home/home.component';
import { DiaryComponent } from './pages/diary/diary.component';
import { RecommendationsComponent } from './pages/recommendations/recommendations.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { RegisterComponent } from './register/register.component';
import { LoginComponent } from './login/login.component';
import { AffirmationComponent } from './affirmation/affirmation.component';
import { BreathingComponent } from './breathing/breathing.component';
import { MemoryGameComponent } from './memory-game/memory-game.component';
import { HttpClientModule } from '@angular/common/http';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { ProfileComponent } from './profile/profile.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    DiaryComponent,
    RecommendationsComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    AffirmationComponent,
    BreathingComponent,
    MemoryGameComponent,
    ProfileComponent,
    
  ],
  imports: [
    HttpClientModule,

    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [
    provideClientHydration(),
    provideHttpClient(withFetch()),

  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
