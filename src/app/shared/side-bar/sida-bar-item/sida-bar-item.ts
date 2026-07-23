import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-sida-bar-item',
  imports: [],
  templateUrl: './sida-bar-item.html',
  styleUrl: './sida-bar-item.css',
})
export class SidaBarItem {

  @Input() menuDetails!:{path:string,name:string};
}
