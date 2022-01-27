import { Component, OnInit } from '@angular/core';
import { GetMenuService } from './../../services/get-menu.service';
import {RootObject} from './../../services/get-menu.service';

@Component({
  selector: 'app-panini',
  templateUrl: './panini.component.html',
  styleUrls: ['./panini.component.scss'],
})
export class PaniniComponent implements OnInit {

  constructor(private getMenu: GetMenuService) { }

  results = <any>{}
  sandwiches : RootObject [] = [];

  async ngOnInit() {

    this.results = await this.getMenu.GetFoods();
    this.sandwiches = this.results.filter(item => item.category=='Ufficiale')
  }

}
