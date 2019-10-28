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
  imageLayerCellSite;
  imageLayerHex;

  constructor(public arcgis: ArcgisService) {
  }

  ngOnInit() {
    const map = L.map('map').setView([40.65, -74.57], 13);
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      // tslint:disable-next-line
      attribution: "© <a href='https://www.openstreetmap.org/copyright'>OpenStreetMap</a> contributors"
    }).addTo(map);
    this.addLayerCalls(map);
    const mapClone = map;
    map.on('zoomend', (ev) => {
      this.addLayerCalls(map);
    });
    map.on('moveend', (ev) => {
      this.addLayerCalls(map);
    });
  }

  addLayerCalls(map) {
    this.addImageLayerCellSite(map);
    this.addImageLayerHex(map);
  }

  addImageLayerCellSite(map) {
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
      'dynamicLayers': [{"id":1,"source":{"mapLayerId":1,"type":"mapLayer"},"definitionExpression":"CYUwZgogHgDgksABAXkQJgIwA4BsXEDyArgC4A2AliAE4qIAMiAhgHZID2YYAziCXY2ZtE3CiRAsmAWxDcAFuwDudDAGZEQpAAUAcvKUr1mxAGMQZMgGUxIACogTcluzLsA5gE86AFgDiG1iQAN3pQxgpuRBJqIhBjMwtLGiCKFjc6fWVA03MyHRAKNzkAI3ZaVEz43IISORo6OQpQY2ApAH0SChluEmkYRAAhCFsAdQgIHUQAcjR6DABOAFp6LGWMKcQAQR0AEWnZheXV1XWA4QSrGx2mcRQZuaWVxZONs6QL0VuIqJi44xAghJ+KlEAAKAAytggACVZOZbOxfNwpABVKQkbgAMSYFDIABpITC4WRMdR2FIkaj0VicfjCVpgCxYQArAlQpLUFJmFls4ZMHmEgCy7GKuLEHlJ5IgpGoTGxuN5BHY3F50OoJgAwuwmSBWYTrMVYUxgPKyERqCBeQA1diEnZkmCqshgVXqrU6noCqFwFjRfnE028zYkEheiA+v0ACXYgcJm1IcjDNrjpWoJAAlG8NKCtBq4It6SYTFoTBQANr0AC6iG+zn4LCIFjxiDIIDcEmAkRBZYA3kEmGaQAAuBhSdhIACsGDQzZMLjKI4AxFg0PNvGuAL54vsD2IjjBjyfT2fz6hLiCbNADeiqLc7wf7+iHxBTmemU9LnZYAbzCcAdjvfsH0QDBQmfV8T1cM9EEXVRNlUDUJywQDd2HEC5nA493ygz8cE2b8BhQ4DQLQTC3znHCYKwLAMG8TEdiIvd0NUMjIIXGD-02HBvBwRi0NA7xWOw9jYKwCAVlvbcgKY0CJyEiiRIwCd10xACpNQx8cHkj8qPoeYMD-ST7xk+g-20yjFwGDUePoCA+MfLBzJEjUdjQCAkPs9D5ic6DFyQuDvDs9TiIPccXywhTfMxCBQPozyMFAnylwnVR9KwTZ4oSpKYMxBKcA1DVMtIsKIOE3yJzXHZvCM6T+LUbLF30mL5kI4KZNohqIG8aqf0yuSSoinTYI1cZZkyrSBvIobqL-HZ5iC4y6rMya2N8pTNis+hMsclayqXEaWqwCdMu83bIuS7wfwnDK2v44qjymizEIGTEBhqjSQNmBrrJwP8J142790wBqcDeo60HitB7vCx7nPoNzbMhlizqGpTMXowrAc+wSUYslK5i6yH+oe1alxweYdk2RGsenCaSb2mCWqqgYbsWoHlvp86YL-ehMXy+ZIZ2zmhtUehvAwHZ3uI1cGpvVRVHF+LkeFiz6AGN7Nxp0WGo2-CJ2OrXQpVkSJ3GPCIa16HXyAA"}],
      'f': 'image'
    };
    this.drawCellSite(map, body, imageBounds);
  }
  addImageLayerHex(map) {
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
      'dynamicLayers': [{"id":1,"source":{"mapLayerId":1,"type":"mapLayer"},"definitionExpression":"AQewrgLgNglgpgJ2AXmABmAQwHYBNQBmBAznBCulnsLgLYD6EMtcxEmtADsAEICiAFQDqfPgDlgAcgBMaAIwBOALRy0StAHZJwAIJiAIlNmKVauQGZtVfAGM4UKMRgQ4wGMWAQEYVznxRMcmQAFjQAOgA2YIjpAFY0WIVrYCgQbAolDWDItAiFRIAOc2SACgAlAGUygAUlABkBPmqbGzLiBE4AbTQAXTcPbBBybDAHABoUuABzODwPGHTOgG8EHBmALiwAN0RMGeAAPlQlCI1gADJz7d39gB50CZsQVIRNgGJc6LgIgF8xlbWcE2mB2q32R2ASgKZ0u1zBrnuJw0j2eIFewDeX2CckwfwB2A2cL2rghSgU0guVxBNwRkOhKJe7yIBEwsWkeNWBKBRPBx1UGFh1PhwER5IZaKZLPiaA5gOBoOJhz5aAKlJ5tNMaHF6LecFwsQARgoDbKufKaUrIXI5ME1ULFYjVAVtUy0DL-pzCfbeVbpBTBQq7labS6MRpcnANOyPXL1ZaVAUBVTAxq5H7Qx83T8egBKZK4BBbNiYBBBYASfMgWiYBbILYALwA7rgIGEnrRkgtcHAAB4AMXgUFwyDogSAA"}],
      'f': 'image'
    };
    this.drawHex(map, body, imageBounds);
  }

  drawCellSite(map, body, imageBounds) {
    // tslint:disable-next-line
    if (map.hasLayer(this.imageLayerCellSite)) {
      map.removeLayer(this.imageLayerCellSite);
    }
    this.imageLayerCellSite = L.imageOverlay(`http://localhost:9000/cellsite/export?text=${JSON.stringify(body)}`, imageBounds).addTo(map);
  }

  drawHex(map, body, imageBounds) {
    // tslint:disable-next-line
    if (map.hasLayer(this.imageLayerHex)) {
      map.removeLayer(this.imageLayerHex);
    }
    this.imageLayerHex = L.imageOverlay('http://localhost:9000/hex/export?text=' + JSON.stringify(body), imageBounds).addTo(map);
  }
}
