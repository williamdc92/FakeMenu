import { Component, OnInit } from '@angular/core';
import { GetMenuService } from './../../services/get-menu.service';
import {RootObject} from './../../services/get-menu.service';




@Component({
  selector: 'app-pizze',
  templateUrl: './pizze.component.html',
  styleUrls: ['./pizze.component.scss'],
})
export class PizzeComponent implements OnInit {
  
  constructor(private getMenu: GetMenuService) { }

  results = <any>{}
  pizza : RootObject [] = [];
 

  async ngOnInit() {
     this.results = await this.getMenu.GetFoods();
     this.pizza =  this.results.filter(item => item.category=='Pizza')
     
  }
  
  

}
