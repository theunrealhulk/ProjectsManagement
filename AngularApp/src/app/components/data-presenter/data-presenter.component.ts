import { Component, Input } from '@angular/core';
;


@Component({
  selector: 'app-data-presenter',
  templateUrl: './data-presenter.component.html',
  styleUrls: ['./data-presenter.component.css']
})
export class DataPresenterComponent {
  @Input() actions: { url: string; label: string }[]=[]

  @Input() dataSource: any[] = [];
  @Input() columns: { key: string, label: string }[] = [];

  getKeys(obj: any): string[] {
        return Object.keys(obj);
  }
  getHeaderRowDef(columns: any[]): string[] {
    return columns.map(column => column.key);
  }

  getColumnDefs(columns: any[]): string[] {
    return columns.map(column => column.key);
  }
  formatValue(element: any, key: string): string {
    const value = String(element[key]);

    if (Array.isArray(element[key])) {
      return String(element[key].length);
    }
    if (value.match(/^\d{4}-\d{2}-\d{2}T/)) {
      return value.substring(0, 10);
    }

    return value;
  }

}
