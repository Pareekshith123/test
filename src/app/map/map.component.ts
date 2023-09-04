import { Component, OnInit, ElementRef } from '@angular/core';

@Component({
  selector: 'app-map',
  template: '<div id="google-map" style="width: 100%; height: 500px;"></div>',
  styleUrls: ['./map.component.css']
})
export class MapComponent implements OnInit {
  constructor(private elementRef: ElementRef) {}

  ngOnInit() {
    const mapOptions = {
      center: { lat: 15.3173, lng: 75.7139 }, // Karnataka's coordinates
      zoom: 7 // Adjust the zoom level as needed
    };

    const map = new google.maps.Map(this.elementRef.nativeElement.querySelector('#google-map'), mapOptions);

    // Place a marker for Karnataka
    const marker = new google.maps.Marker({
      position: { lat: 15.3173, lng: 75.7139 },
      map: map,
      title: 'Karnataka'
    });

    // Taluk data
    const talukData = [
      {
        name: 'Taluk 1',
        color: '#FF0000',
        coordinates: [
          { lat: 15.2, lng: 75.6 },
          { lat: 15.3, lng: 75.7 },
          // Add more coordinates for the polygon...
        ]
      },
      {
        name: 'Taluk 2',
        color: '#00FF00',
        coordinates: [
          // Coordinates for Taluk 2...
        ]
      },
      // Add more taluks...
    ];

    // Create polygons for each taluk
    talukData.forEach(taluk => {
      const polygon = new google.maps.Polygon({
        paths: taluk.coordinates,
        strokeColor: taluk.color,
        strokeOpacity: 0.8,
        strokeWeight: 2,
        fillColor: taluk.color,
        fillOpacity: 0.35,
        map: map
      });

      // Add click event for polygons (if needed)
      google.maps.event.addListener(polygon, 'click', function() {
        // Do something when the polygon is clicked
        console.log('Clicked on', taluk.name);
      });
    });

    // You can add more markers, polygons, etc., as needed
  }
}
