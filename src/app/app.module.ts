import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { routing } from './app.routes';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { ThemeexploreComponent } from './portfolio/themeexplore/themeexplore.component';
import { PaperexploreComponent } from './portfolio/paperexplore/paperexplore.component';
import { OwnexploreComponent } from './portfolio/ownexplore/ownexplore.component';
import { NeedexploreComponent } from './portfolio/needexplore/needexplore.component';
import { EarthexploreComponent } from './portfolio/earthexplore/earthexplore.component';
import { BalloonexploreComponent } from './portfolio/balloonexplore/balloonexplore.component';
import { SeeexploreComponent } from './portfolio/seeexplore/seeexplore.component';
import { FreeexploreComponent } from './portfolio/freeexplore/freeexplore.component';
import { CoffeeexploreComponent } from './portfolio/coffeeexplore/coffeeexplore.component';
import { PinkexploreComponent } from './portfolio/pinkexplore/pinkexplore.component';
import { TeamComponent } from './team/team.component';





@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PortfolioComponent,
    ThemeexploreComponent,
    PaperexploreComponent,
    OwnexploreComponent,
    NeedexploreComponent,
    EarthexploreComponent,
    BalloonexploreComponent,
    SeeexploreComponent,
    FreeexploreComponent,
    CoffeeexploreComponent,
    PinkexploreComponent,
    TeamComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing,
    ReactiveFormsModule



  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  }
