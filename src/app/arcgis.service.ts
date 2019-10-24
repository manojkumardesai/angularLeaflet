import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ArcgisService {

  constructor(public http: HttpClient) { }
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json', 'responseType': 'blob'})
  };

  getCellSites(body) {
    return this.http.post('http://10.20.40.53:9000/cellsite/export', body, {responseType: 'arraybuffer',
    headers: new HttpHeaders().append('Content-Type', 'application/json')});
  }
}
