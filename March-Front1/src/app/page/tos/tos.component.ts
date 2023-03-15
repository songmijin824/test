import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-tos',
  templateUrl: './tos.component.html',
  styleUrls: ['./tos.component.css'],
})
export class TOSComponent implements AfterViewInit {
  constructor() {}

  ngAfterViewInit(): void {
    window.scroll(0, 0);
  }
}
