import { Component, OnInit } from '@angular/core';
import { Card, DSCApiService } from 'app/shared/api';
import { Observable } from 'rxjs';

@Component({
  selector: 'csc-admin-dsc',
  templateUrl: './dsc.component.html',
  styleUrls: ['./dsc.component.scss'],
})
export class DSCComponent implements OnInit {
  // TODO: make it possible to edit card order by drag/drop

  public cards: Observable<Card[]>;

  constructor(private _DSCApiService: DSCApiService) {}

  ngOnInit() {
    this.cards = this._DSCApiService.getCards();
  }
}
