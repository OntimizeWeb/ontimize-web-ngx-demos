import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: 'section-v15',
  templateUrl: './section-v15.component.html',
  styleUrls: ['./section-v15.component.scss']
})

export class SectionV15Component implements OnInit {

  public demos: any[] = [];
  public components: any[] = [];

  constructor(
    protected httpClient: HttpClient
  ) { }

  ngOnInit(): void{
    this.getDemos();
  }

  getDemos(): void {
    const self = this;
    this.httpClient.get('./assets/data/demos.json').subscribe(
      (response) => {
        if (response && Array.isArray(response)) {
          self.demos = response.filter((item: any) => item.version === 15)
        }
      },
      error => console.log(error)
    );
    this.httpClient.get('./assets/data/components.json').subscribe(
      (response) => {
        if (response && Array.isArray(response)) {
          self.components = response.filter((item: any) => item.version === 15)
        }
      },
      error => console.log(error)
    );
  }

}