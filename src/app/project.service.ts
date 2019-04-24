import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Project } from './models/projects';
import { Global } from '../app/global';
import { Observable } from 'rxjs/Observable';
 
@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  public url:string;

  constructor(
    private _http: HttpClient
  ) { 
    this.url = Global.url;
  }

  testService(){
    console.log("hola holita");
  }
}
