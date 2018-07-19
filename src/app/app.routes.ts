import { Component } from '@angular/core';
// Imports
// Deprecated import
// import { provideRouter, RouterConfig } from '@angular/router';
import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PaperexploreComponent } from './portfolio/paperexplore/paperexplore.component';
import { ThemeexploreComponent } from './portfolio/themeexplore/themeexplore.component';
import { OwnexploreComponent } from './portfolio/ownexplore/ownexplore.component';
import { NeedexploreComponent } from './portfolio/needexplore/needexplore.component';
import { EarthexploreComponent } from './portfolio/earthexplore/earthexplore.component';
import { BalloonexploreComponent } from './portfolio/balloonexplore/balloonexplore.component';
import { SeeexploreComponent } from './portfolio/seeexplore/seeexplore.component';
import { FreeexploreComponent } from './portfolio/freeexplore/freeexplore.component';
import { CoffeeexploreComponent } from './portfolio/coffeeexplore/coffeeexplore.component';
import { PinkexploreComponent } from './portfolio/pinkexplore/pinkexplore.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
// Route Configuration
export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'port', component: PortfolioComponent },
  { path: 'theme', component: ThemeexploreComponent },
  { path: 'paper', component: PaperexploreComponent },
  { path: 'own', component: OwnexploreComponent },
  { path: 'need', component: NeedexploreComponent },
  { path: 'earth', component: EarthexploreComponent },
  { path: 'balloon', component: BalloonexploreComponent },
  { path: 'see', component: SeeexploreComponent },
  { path: 'free', component: FreeexploreComponent },
  { path: 'coffee', component: CoffeeexploreComponent },
  { path: 'pink', component: PinkexploreComponent },

  ];

export const routing: ModuleWithProviders = RouterModule.forRoot(routes, {useHash: true});
