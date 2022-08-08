import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { AppRoutingModule } from './app-routing.module';
import { FormsModule } from '@angular/forms'; 
import { AppComponent } from './app.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { WorldMapComponent } from './components/world-map/world-map.component';
import { ChartsComponent } from './components/charts/charts.component';
import { HistoryComponent } from './components/history/history.component';
import { DataServicesService } from './services/data-services.service';

@NgModule({
  declarations: [
    AppComponent,
    WorldMapComponent,
    ChartsComponent,
    HistoryComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    Ng2SearchPipeModule
  ],
  providers: [DataServicesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
