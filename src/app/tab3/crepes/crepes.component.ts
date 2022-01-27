import { Component, OnInit } from '@angular/core';
import { GetMenuService } from './../../services/get-menu.service';
import {RootObject} from './../../services/get-menu.service';

@Component({
  selector: 'app-crepes',
  templateUrl: './crepes.component.html',
  styleUrls: ['./crepes.component.scss'],
})
export class CrepesComponent implements OnInit {

  constructor(private getMenu: GetMenuService) { }
  results = <any>{}
  crepes : RootObject [] = [];

  async ngOnInit() {
     this.results = await this.getMenu.GetFoods();
     this.crepes = this.results.filter(item => item.category=='Crepes');
  }

}
