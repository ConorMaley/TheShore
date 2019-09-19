import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { LinesCentralComponent } from './linesCentral/linesCentral.component';
import { ESPNScraperComponent } from './espnScraper/espnScraper.component';
import { HomePageComponent } from './homePage/homePage.component';
import { NFLScheduleComponent } from './nflSchedule/nflSchedule.component';
import { DummyPageComponent } from './dummyPage/dummyPage.component';
import { DraftDayComponent } from './draftDay/draftDay.component';
import { PlayerCardComponent } from './draftDay/playerCard/playerCard.component';
import { GameComponent } from './linesCentral/game/game.component';

const appRoutes: Routes = [
  { path: 'Home', component: HomePageComponent },
  { path: 'LinesCentral', component: LinesCentralComponent },
  { path: 'ESPNScraper', component: ESPNScraperComponent },
  { path: 'DraftDay', component: DraftDayComponent },
  { path: 'NFLSchedule', component: NFLScheduleComponent },
  { path: '',
    redirectTo: '/Home',
    pathMatch: 'full'
  },
  { path: '**', component: DummyPageComponent } // page not found 
  // { path: 'LinesCentral:id', component: LinesCentralComponent }
  // {
  //   path: 'heroes',
  //   component: HeroListComponent,
  //   data: { title: 'Heroes List' }
  // }
];

// TODO since this app is small, for now, we can just have one module 
// but as we add more component, we should move towards modularizing this app 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    LinesCentralComponent,
    GameComponent,
    HomePageComponent,
    DummyPageComponent,
    ESPNScraperComponent,
    DraftDayComponent,
    NFLScheduleComponent,
    PlayerCardComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
