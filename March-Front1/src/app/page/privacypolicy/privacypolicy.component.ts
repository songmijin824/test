import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-privacypolicy',
  templateUrl: './privacypolicy.component.html',
  styleUrls: ['./privacypolicy.component.css'],
})
export class PrivacypolicyComponent implements AfterViewInit {
  ngAfterViewInit(): void {
    window.scroll(0, 0);
  }
}
