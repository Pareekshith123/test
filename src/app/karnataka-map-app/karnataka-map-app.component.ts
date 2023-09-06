import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'app-karnataka-map-app',
  templateUrl: './karnataka-map-app.component.html',
  styleUrls: ['./karnataka-map-app.component.css']
})
export class KarnatakaMapAppComponent implements OnInit{
  map: any;

  ngOnInit() {
    // Initialize the map
    this.map = L.map('map').setView([17.2602, 74.1461], 6); // Centered around Bangalore

    // Add a tile layer (you can use other map providers)
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(this.map);

    // Load Karnataka GeoJSON data and add it to the map with green color
    fetch('assets/karnataka.json')
      .then((response) => response.json())
      .then((geojson) => {
        L.geoJSON(geojson, {
          style: {
            color: 'green',      // Change the color to green
            weight: 1.5,           // Boundary line weight
            opacity: 1,          // Boundary line opacity
            fillOpacity: 0.09    // Fill opacity for the green area
          },
          onEachFeature: function (feature, layer) {
            if (feature.properties && feature.properties.district) {
              // Create a tooltip and bind it to the layer
              const tooltip = L.tooltip({
                permanent: false,
                direction: 'center',
                className: 'district-tooltip'
              }).setContent(feature.properties.district+
                `<br /> 5`);
          
              layer.bindTooltip(tooltip);
            }
          }
          
        }).addTo(this.map);
      });
  }
}