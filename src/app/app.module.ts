import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './presentation/components/nav-bar/nav-bar.component';
import { SavedCitiesComponent } from './presentation/views/home/components/saved-cities/saved-cities.component';
import { SearchCityComponent } from './presentation/views/home/components/search-city/search-city.component';
import { HomeComponent } from './presentation/views/home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchCityComponent,
    SavedCitiesComponent,
    NavBarComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
