import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-titre-c',
  templateUrl: './titre-c.component.html',
  styleUrls: ['./titre-c.component.scss']
})
export class TitreCComponent implements OnInit {

  @Input() title: string;

  constructor() { }

  ngOnInit(): void {
  }

}
