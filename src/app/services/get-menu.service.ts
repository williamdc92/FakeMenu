import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

export interface RootObject {
  name: string;
  ingredients: string;
  price: number;
  image: string;
  type: string;
  id: string;
  category: string;
}


@Injectable({
  providedIn: 'root'
})
export class GetMenuService {

  constructor(private http: HttpClient) { this.GetFoods }

  GetFoods () {
   return this.http.get<Response>("https://raw.githubusercontent.com/williamdc92/SimpleMenuApi/main/Menu2.json", {}).toPromise()};
  }

  

