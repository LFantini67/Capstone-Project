import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AuthModuleModule } from './auth/auth-module/auth-module.module';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CitiesComponent } from './components/cities/cities.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CityComponent } from './components/city/city.component';
import { RestaurantComponent } from './components/restaurant/restaurant.component';
import { InterestComponent } from './components/interest/interest.component';
import { EnjoyComponent } from './components/enjoy/enjoy.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { FilterByCapitalPipe } from './pipes/filter-by-capital.pipe';
import { FilterByWinterPipe } from './pipes/filter-by-winter.pipe';
import { FilterBySummerPipe } from './pipes/filter-by-summer.pipe';

@NgModule({
  declarations: [
    AppComponent,
    CitiesComponent,
    NavbarComponent,
    CityComponent,
    RestaurantComponent,
    InterestComponent,
    EnjoyComponent,
    HeaderComponent,
    FooterComponent,
    FilterByCapitalPipe,
    FilterByWinterPipe,
    FilterBySummerPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AuthModuleModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
