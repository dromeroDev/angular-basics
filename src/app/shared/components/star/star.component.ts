import {
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output,
} from '@angular/core';

@Component({
  selector: 'app-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.scss'],
})
export class StarComponent implements OnChanges {
  @Input() rating: number = 0;
  cropWidth: number = 75;
  @Output() ratingClicked: EventEmitter<string> = new EventEmitter();

  constructor() {}

  ngOnChanges(): void {
    this.cropWidth = (this.rating * 75) / 5;
  }

  onClick(): void {
    this.ratingClicked.emit(`The rating clicked is ${this.rating}`);
  }
}
