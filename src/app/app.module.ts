import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HighchartsChartModule } from 'highcharts-angular';
import { AppComponent } from './app.component';
import { EotChartComponent } from './eot-chart/eot-chart.component';
import { BarChartComponent } from './bar-chart/bar-chart.component';
import { HttpClientModule } from '@angular/common/http';
import { DelayFromContractorComponent } from './delay-from-contractor/delay-from-contractor.component';
import { MapComponent } from './map/map.component';
@NgModule({
  declarations: [
    AppComponent,
    EotChartComponent,
    BarChartComponent,
    DelayFromContractorComponent,
    MapComponent
  ],
  imports: [
    BrowserModule,HighchartsChartModule,HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
