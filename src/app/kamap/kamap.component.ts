import { Component } from '@angular/core';
import { FusionChartsModule } from 'angular-fusioncharts';
import * as FusionCharts from 'fusioncharts/core';
import * as Maps from 'fusioncharts/maps';
import * as Karnataka from 'fusionmaps/maps/fusioncharts.india';

FusionChartsModule.fcRoot(FusionCharts, Maps, Karnataka);

@Component({
  selector: 'app-kamap',
  template: `
    <fusioncharts
      [type]="'maps/karnataka'"
      width="400px"
      height="500px"
      [dataFormat]="'json'"
      [dataSource]="mapData"
    ></fusioncharts>
  `,
})
export class KamapComponent {
  mapData = {
    chart: {
      caption: 'Karnataka Map',
      subcaption: 'Showing Karnataka Districts',
    },
    colorrange: {
      gradient: '1',
      minvalue: '0',
      code: '#FFD74D',
      startlabel: 'Low',
      endlabel: 'High',
    },
    data: [
      {
        id: 'IN.KA.BG', // Bangalore
        value: '100',
      },
      {
        id: 'IN.KA.BL', // Ballari
        value: '100',
      },
      // Add more data for other districts of Karnataka
    ],
  };
}
