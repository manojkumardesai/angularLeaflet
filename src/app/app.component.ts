import { Component, OnInit } from '@angular/core';
import { ArcgisService } from './arcgis.service';

declare let L;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'dmat';
  imageLayer;

  constructor(public arcgis: ArcgisService) {
  }

  ngOnInit() {
    const map = L.map('map').setView([40.65, -74.57], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      // tslint:disable-next-line
      attribution: "© <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
    }).addTo(map);
    this.addImageLayer(map);
    const mapClone = map;
    map.on('zoomend', (ev) => {
      this.addImageLayer(map);
    });
    map.on('moveend', (ev) => {
      this.addImageLayer(map);
    });
  }

  addImageLayer(map) {
    // tslint:disable-next-line
    let boundaries = [map.getBounds()._southWest.lng, map.getBounds()._southWest.lat, map.getBounds()._northEast.lng, map.getBounds()._northEast.lat];
    // tslint:disable-next-line
    const imageBounds = [[map.getBounds()._southWest.lat, map.getBounds()._southWest.lng], [map.getBounds()._northEast.lat, map.getBounds()._northEast.lng]];
    const body = {
      'bbox': boundaries.toString(),
      'bboxSR': 102100,
      'imageSR': 102100,
      'size': '1673,856',
      'dpi': 86.39999771118164,
      'format': 'png32',
      'transparent': true,
      // tslint:disable-next-line
      'dynamicLayers': [{ "id": 1, "source": { "mapLayerId": 1, "type": "mapLayer" }, "definitionExpression": "CYUwZgogHgDgksABAXkQJgIwBYCcB2RAeQFcAXAGwEsQAnFRABkQEMA7JAezDAGcRT6TFu0Q9KpEK2YBbEDwAWHAO70MAZkTCkABQByC5ao1bEAYxDlyAZXEgAKiFPzWHchwDmAT3pYA4prYkADcGUKZKHkRSGmIQE3NLK1ogylZ3egMVQLMLcl0QSnd5ACMOOlRM+NzCUnlaDMUskWBpAH1SSlkeUhkYRAAhCDsAdQgIXUQAcjQGDBwAWgYF2cnEAEFdABEpmbnFhbUGVarE203mCRRp2eWDo80T8jFLiKiYuJMQIMkBVMQACgAMnYIAAlOQWOwcXw8aQAVWkpB4ADFmJRyAAaYFgiHkZE0DjSGHwxEotGY7HaYCscEAKyxIKSNBS5jpDKGzDZ2IAshxiujxJ58YSIGQaMxUej2YQODx2aCaKYAMIcGkgenYmzFcHMYCS8jEGggdkANQ42M2BJg8vIYHlipVau6XJBcFY0U5uP17LWpFILogbo9AAkON7sWsyPIA2aI6UaKQAJQBEQA7RKuDzSmmUzaUyUADaDAAuohXi4BKxiJYMYhyCB3JJgJE-gWAN5BZgGkAALkY0g4SAArBg0LXTK4yn2AMQADjQOFwWAAvhiO13Yn2MAPh6Px5OaDOIGs0P0GGpV+vu1uGDvECOx2YDzPNrP+jgh3hL53r4gMKE7wffc3EPRBpzUNY1CVIdZ2-Ddez-WZAL3J8QJfAA2NY336ODf3-NBkMfCc0LA2dZ2wZFNlwzdELUQjgKnMDPzWdCsHQ6iEP-LB6NQxjwNnCAGFnC81x-Gj-yHHjiL4jAh1wZEv1E+Cb3QqTn1IpYMDwESr3Ehg8DUkjp36JU2IYCAOJvWdDL4pVNjQCAYMsxCcBs0DpxgiCsAspS8O3Qd7xQ6T3ORCB-0o5yMH-NyZyHNQcAwWc1kiqKYrA5EovQpUlRSgiAqA3j3KHRdNiwHSxM49Q0unBKwpwHDfPE7BqogLAyvfFLJPyoL1PApUxhmFLVO6ojerIvBNhwHzdMqgyRoY9zZLWEyGBS6z5sKmd+vq2chxS1yNuC2KsHfIdksazi8t3UajOg-pkX6crlL-GZqtM9C8CHdiLq3TBqvQx7drQSK0CuwKbtshgHPMkG6MO3rZORSicp+l7uPhoy4tmVqQa666FpndCcE2NYYdR0dhvxzawPq0r+nOmbfrmqmjrAvAGGRLKcBB9aWd6w4sAwTYnrwhdqvPNQ1EFyK4b5oyGH6R7Fxl28Mb45asKHPbybUfy5b4ocxkw4GdbBh8gA" }],
      'f': 'image'
    };
    this.drawCellSite(map, body, imageBounds);
  }

  drawCellSite(map, body, imageBounds) {
    // tslint:disable-next-line
    if (map.hasLayer(this.imageLayer)) {
      map.removeLayer(this.imageLayer);
    }
    this.imageLayer = L.imageOverlay('http://localhost:9000/cellsite/export?text=' + JSON.stringify(body), imageBounds).addTo(map);
  }
}
