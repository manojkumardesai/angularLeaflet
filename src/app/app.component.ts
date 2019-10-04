import { Component, OnInit } from '@angular/core';
declare let L;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'dmat';

  constructor() {
  }

  ngOnInit() {
    const map = L.map('map').setView([40.65, -74.57], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '© <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);

    let imageUrl = "https://vzwdt.com/DMATDEV/arcgisbd/rest/services/Point_FGDB_Hex/MapServer/export?bbox=-8321707.934923685%2C4950398.029786348%2C-8285132.816889278%2C4967175.957494922&bboxSR=102100&imageSR=102100&size=1914%2C878&dpi=96&format=png32&transparent=true&dynamicLayers=%5B%7B%22id%22%3A1%2C%22source%22%3A%7B%22mapLayerId%22%3A1%2C%22type%22%3A%22mapLayer%22%7D%2C%22definitionExpression%22%3A%22AQewrgLgNglgpgJ2AXmABmAQwHYBNQBmBAznBCulnsLgLYD6EMtcxEmtADsAEICiAFQDqfPgDlgAcgBMaAIwBOALRoAHCrmTgAQTEARKbMUr1AZk3Aq%2BAMZwoUYjAhxgMYsAgIwLnPgAUAEoAygEACkoAMgJ8odbWAcQInADaaAC6ru7YIOTYYPYANMBQcADmcHjuMNjAyQDeCDjlAFxYAG6ImOXAAHyoSgBsAOzAAGSj7Z3dADzoRdYgUCAIrQDEaAMALANwAwC%2BBQ1NcK2YHY3dfcBKqiPjkxcus4ND84vLa9twm3KYB0fYFoPLouK5KBTSMYTM5TJ7XW5vJYrYCrIgETAAVmk-0agJOwMu-TkaAw9xhj2AzwhiI%2BKKImJJOOOp3OIN6RLUUIJcKUxLQNORqzguAxACMFKKmXiWbD2dc5HJNlzyWznsTVAK1gRGYdcUCVYT5dJIWTWTN5YrNSihhs4ENsbrmdy5bzVKToWaeXJjVb1oy0gBKKw0BBtNiYBDkVASYO4EC0TDVZBtABeAHdcBAAHQLWjB6q4OAADwAYvAoLhkHRMBAgA%22%7D%5D&f=image";
    const imageBounds = [[40.578705561124856, -74.75517427920646], [40.69308042301413, -74.42661440371863]];
    L.imageOverlay(imageUrl, imageBounds).addTo(map);
    console.log(map.getZoom());
    const mapClone = map;
    map.on('zoomend', function(ev) {
      console.log(mapClone.getZoom());
  });
  }
}
