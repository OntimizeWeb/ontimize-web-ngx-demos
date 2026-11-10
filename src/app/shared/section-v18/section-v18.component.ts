import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'section-v18',
  templateUrl: './section-v18.component.html',
  styleUrls: ['./section-v18.component.scss']
})
export class SectionV18Component implements OnInit {

  public demos: any[] = [];
  public components: any[] = [];
  public featuredComponent: any;

  get totalComponents(): number {
    return this.components.length + (this.featuredComponent ? 1 : 0);
  }

  constructor(
    protected httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.getDemos();
  }

  getDemos(): void {
    const self = this;
    this.httpClient.get('./assets/data/demos.json').subscribe(
      (response) => {
        if (response && Array.isArray(response)) {
          self.demos = response.filter((item: any) => item.version === 18 && !item.hidden);
        }
      },
      error => console.log(error)
    );
    this.httpClient.get('./assets/data/components.json').subscribe(
      (response) => {
        if (response && Array.isArray(response)) {
          const items = response.filter((item: any) => item.version === 18 && !item.hidden);
          self.featuredComponent = items.find((item: any) => item.badge);
          self.components = items.filter((item: any) => !item.badge);
        }
      },
      error => console.log(error)
    );
  }

}
