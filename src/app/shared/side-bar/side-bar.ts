import { Component } from '@angular/core';
import { SidaBarItem } from "./sida-bar-item/sida-bar-item";

@Component({
  selector: 'app-side-bar',
  imports: [SidaBarItem],
  templateUrl: './side-bar.html',
  styleUrl: './side-bar.css',
})
export class SideBar {}
