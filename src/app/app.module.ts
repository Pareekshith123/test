import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HighchartsChartModule } from 'highcharts-angular';
import { AppComponent } from './app.component';
import { EotChartComponent } from './eot-chart/eot-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { HttpClientModule } from '@angular/common/http';
import { DelayFromContractorComponent } from './delay-from-contractor/delay-from-contractor.component';
import { MapComponent } from './map/map.component';
import { KarnatakaMapAppComponent } from './karnataka-map-app/karnataka-map-app.component';
import { ChartComponent } from './chart/chart.component';
import { FusionChartsModule } from 'angular-fusioncharts';

import { KamapComponent } from './kamap/kamap.component';
import { KarnatakaMapComponent } from './karnataka-map/karnataka-map.component';
@NgModule({
  declarations: [
    AppComponent,
    EotChartComponent,
    BarChartComponent,
    DelayFromContractorComponent,
    MapComponent,
    KarnatakaMapAppComponent,
    ChartComponent,
    KamapComponent,
    KarnatakaMapComponent
  ],
  imports: [
    BrowserModule,HighchartsChartModule,HttpClientModule,FusionChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
