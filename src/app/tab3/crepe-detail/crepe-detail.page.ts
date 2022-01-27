import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GetMenuService } from 'src/app/services/get-menu.service';

@Component({
  selector: 'app-crepe-detail',
  templateUrl: './crepe-detail.page.html',
  styleUrls: ['./crepe-detail.page.scss'],
})
export class CrepeDetailPage implements OnInit {

  constructor(private route: ActivatedRoute, private getMenu: GetMenuService) { }

  id : "";
  sub: any;
  results = <any>{}
  single_food = [];
  single_food_name = [];
  spread = []
  async ngOnInit() {
  this.results = await this.getMenu.GetFoods();
  this.sub = this.route.params.subscribe(params => {
  this.id = params['id']; 
  });

  this.single_food = this.results.filter(food => food.id === this.id);
  this.single_food_name = this.single_food.map(item => item.name)
  
  }


}