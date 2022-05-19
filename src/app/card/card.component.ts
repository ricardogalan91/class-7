import { Component, OnInit } from '@angular/core';
import { MatInputModule } from '@angular/material/input';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})
export class CardComponent implements OnInit {
  liked:boolean;
  constructor() { }

  ngOnInit(): void {
  }

  onClickLike(){
    this.liked=true;
  }

}
