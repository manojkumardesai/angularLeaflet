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
    // this.addImageLayerHex(map);
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
      'dynamicLayers': [{"id":1,"source":{"mapLayerId":1,"type":"mapLayer"},"definitionExpression":"CYUwZgogHgDgksABAXkQJgIwFYAMXEDyArgC4A2AliAE4qI6ICGAdkgPZhgDOIJdDTVoi4USIZowC2ILgAs2AdzoYAzIkFIACgDk5i5Wo2IAxiDJkAyqJAAVEMdnM2ZNgHMAnnQAsAcXUskADccEIYKLkQSaiIQI1NzCxpAimZXOj0lAJMzMm0QCldZACM2WlQMuJyCElkaOlkKUCNgSQB9EgppLhIpGEQAIQgbAHUICG1EAHI0HAwATgBaHAAOJYxJxABBbQARKZn5pdWVdf8heMtrHcYxFGnZxZWFk42zpAuRW-DI6NijEEC4j4KUQAAoADI2CAAJRkZhsbB8XEkAFVJCQuAAxRgUMgAGkhMLhZEx1DYkiRqPRWJx+MJmmAzFhACsCVDEtRkqYWWyhoweYSALJsIq40TuUnkiCkaiMbG43kENhcXnQ6jGADCbCZIFZhKsRVhjGA8rIRGoIF5ADU2ISdmSYKqyGBVeqtTrugKoXBmFF+cTTbzNiQSF6ID6-QAJNiBwmbUiyMM2uMlagkACUb3UoM0GrgC3pxmMmmMFAA2jgALqIb5OPjMIjmPGIMggVziYAREFlgDegUYZpAAC56JI2EgsBg0M3jM5SiOAMTLNBzLyrgC+eL7A5iI4wY4nU5nc+oi4gmzQ-RwKk328He5wB8Qk+nJhPi52y36cywAHZb-296IBgIRPi+x4uKeiALiomwqBqWDLABO7DsBsxgUeb6QR+ABsmxfv0yFASBaAYa+s7YdByzLBgXiYjsRG7mhKhkRB87QX+mw4V4OGMahIFeKxWHsTBywQCsN5boBTEgVgQkUSJ2Brpi-5SShD44fJ75UTgcwYL+kl3jJOC-lplELv0Go8TgEB8Q+yxmSJGo7GgECIXZaFzI5UELohsFeLZanEfu47PphCk+ZiEAgfRHkYCB3mLlgKh6csmxxfFiXQZi8U4RqGoZaRoXgcJPlYKuOxeIZ0n8aoWULnp0VzIRQUybR9UQF4VXfhlcnFeF2kwRqYwzBlmn9eRg3Ub+OxzIFRm1aZE1sT52CbJZOAZQ5y2lYuw3NcsWAZV5O0RUlXjflg6WtfxRWHpN5kIf0mL9NV6nATM9VWThv5YLxN17pg9U4a9h1oHFaB3WFD1OTgrk2RDLGnYN2CYvRBUAx9gnI+ZyWzJ1EN9fdK2Ljhcw7JsCOY1O43E7t0HNZV-TXQtgNLXTZ3Qb+OCYnlcwQ9tHODSoOBeBgOxvcRK71deKgqGLcVI0L5k4P0r0btTIv1et+FYEdmshcrIlYGMeHg5rUMvkAA"}],
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
