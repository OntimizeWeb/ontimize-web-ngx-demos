import { HttpClient } from "@angular/common/http";
import { Component, Input } from "@angular/core";

@Component({
  selector: 'section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})

export class SectionComponent {

  @Input() version !: number;
  public demos: any[] = [];
  public components: any[] = [];

  constructor(
    protected httpClient: HttpClient
  ) { }

  ngOnChanges(): void{
    this.getDemos();
  }

  getDemos(): void {
    const self = this;
    this.httpClient.get('./assets/data/demos.json').subscribe(
      (response) => {
        if (response && Array.isArray(response)) {
          self.demos = response.filter((item: any) => item.version === self.version)
        }
      },
      error => console.log(error)
    );
    this.httpClient.get('./assets/data/components.json').subscribe(
      (response) => {
        if (response && Array.isArray(response)) {
          self.components = response.filter((item: any) => item.version === self.version)
        }
      },
      error => console.log(error)
    );
  }

}