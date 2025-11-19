import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import { forkJoin } from "rxjs";

@Component({
  selector: 'section-v8',
  templateUrl: './section-v8.component.html',
  styleUrls: ['./section-v8.component.scss']
})

export class SectionV8Component implements OnInit {

  public demos: any[] = [];
  public components: any[] = [];
  public allCards: any[] = [];

  constructor(
    protected httpClient: HttpClient
  ) { }

  ngOnInit(): void {
    this.getDemos();
  }

  getDemos(): void {
    forkJoin({
      demos: this.httpClient.get<any[]>('./assets/data/demos.json'),
      components: this.httpClient.get<any[]>('./assets/data/components.json')
    }).subscribe(
      ({ demos, components }) => {

        this.demos = (demos || []).filter(item => item.version === 8);
        this.components = (components || []).filter(item => item.version === 8);

        this.allCards = [...this.demos, ...this.components];
      },
      error => console.error(error)
    );
  }
}