import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-layouts-view-list',
  templateUrl: './layouts-view-list.component.html',
  styleUrls: ['./layouts-view-list.component.css']
})
export class LayoutsViewListComponent implements OnInit {
  layouts = [
    {
      name: 'Общий по больнице',
      description: 'Отображает общие данные и коэффициенты по заданным значениям',
      updated: new Date('1/1/16'),
    },
    {
      name: 'Стандартные отклонения',
      description: 'Отображает стандартные отклонения по заданным значениям',
      updated: new Date('1/17/16'),
    },
    {
      name: 'По служащим - среднее по коэффициенту',
      // tslint:disable-next-line:max-line-length
      description: 'Отображает среднее значение по коэффициенту за период(если указать период). Значение может быть "Эффективностью" или "заработной платой"',
      updated: new Date('1/28/16'),
    }
  ];
  typesOfShoes = ['Boots', 'Clogs', 'Loafers', 'Moccasins', 'Sneakers'];

  constructor() { }

  ngOnInit() {
  }

}
