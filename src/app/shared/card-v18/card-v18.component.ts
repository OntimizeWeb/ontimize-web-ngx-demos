import { Component, Input } from '@angular/core';

@Component({
  selector: 'card-v18',
  templateUrl: './card-v18.component.html',
  styleUrls: ['./card-v18.component.scss']
})
export class CardV18Component {

  @Input() item: any;

  get isDemo(): boolean {
    return this.item?.type === 'Demo';
  }

  get isDisabled(): boolean {
    return !this.item?.url || this.item.url === '#';
  }

}
