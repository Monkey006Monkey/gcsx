import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sgin-in',
  templateUrl: './sgin-in.component.html',
  styleUrls: ['./sgin-in.component.css']
})
export class SginInComponent implements OnInit {
  a: number;
  constructor() {
    this.a = 3;
  }

  ngOnInit() {
  }

}
