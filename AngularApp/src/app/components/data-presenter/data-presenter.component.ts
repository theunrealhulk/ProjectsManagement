import { Component,Input } from '@angular/core';

@Component({
  selector: 'app-data-presenter',
  templateUrl: './data-presenter.component.html',
  styleUrls: ['./data-presenter.component.css']
})
export class DataPresenterComponent {
  @Input() dataSource: any[] = [];

  getKeys(obj: any): string[] {
    return Object.keys(obj);
  }
}
