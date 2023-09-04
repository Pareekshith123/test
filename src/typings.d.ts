declare namespace google {
    namespace maps {
      class Map {
        constructor(mapDiv: Element, opts?: MapOptions);
      }
  
      interface MapOptions {
        center: google.maps.LatLng;
        zoom: number;
      }
  
      class LatLng {
        constructor(lat: number, lng: number);
      }
  
      class Marker {
        constructor(opts?: MarkerOptions);
        setMap(map: google.maps.Map | null): void;
      }
  
      interface MarkerOptions {
        position: google.maps.LatLng;
        map: google.maps.Map;
        title?: string;
      }
  
      class Polygon {
        constructor(opts?: PolygonOptions);
        setMap(map: google.maps.Map | null): void;
      }
  
      interface PolygonOptions {
        paths: google.maps.LatLng[];
        strokeColor?: string;
        strokeOpacity?: number;
        strokeWeight?: number;
        fillColor?: string;
        fillOpacity?: number;
        map?: google.maps.Map;
      }
      namespace event {
        function addListener(instance: any, eventName: string, handler: (...args: any[]) => void): void;
        function clearInstanceListeners(instance: any): void;
      }
    }
  }
  