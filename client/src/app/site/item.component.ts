import { Component, OnInit } from '@angular/core';
import {Location} from '@angular/common';
@Component({
  templateUrl: 'item.component.html',
})
export class ItemComponent implements OnInit {
  constructor(private location:Location) {  }

  ngOnInit() {}

}
