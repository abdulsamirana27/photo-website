import { Component, OnInit } from '@angular/core';
import {Document} from "postcss";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  value?: Date;

  constructor() { }

  ngOnInit(): void {
  }

}
