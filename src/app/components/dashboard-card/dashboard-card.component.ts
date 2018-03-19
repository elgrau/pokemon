import { Component, Input } from '@angular/core';

@Component({
  selector: 'cmp-pokemon-dashboard-card',
  templateUrl: './dashboard-card.component.html',
  styleUrls: ['./dashboard-card.component.css']
})
export class DashboardCardComponent {

  @Input() title: string;
  @Input() value: string;
  @Input() color: string = 'red';
  @Input() icon: string;

  constructor() { 
    
  }
}
