import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-selectable-list',
  templateUrl: './selectable-list.component.html',
})
export class SelectableListComponent implements OnInit {
  @Input('rows') items: Array<any> = null;
  @Input('columns') fields: Array<string> = null;
  @Output('onSelect') select = new EventEmitter<number>();

  ngOnInit() {
    if (this.items === null) {
      throw new Error(
        "You must provide an array of items to the Selectable List component"
      );
    }

    if (this.fields === null) {
      throw new Error(
        "You must provide an array of columns to the Selectable List component"
      )
    }
  }

  onSelect(event: any) {
    console.log('waaaaat');
    console.log(event);
  }
}
