import { HttpClient } from "@angular/common/http";
import { Component, HostBinding, Injector, Input } from "@angular/core";

@Component({
  selector: 'section',
  templateUrl: './section.component.html',
  styleUrls: ['./section.component.scss']
})

export class SectionComponent {

  @Input() title !: string;
  public selectedVersion: any;
  public ontimizeVersions: any[] = [];
  public data: any[] = [];

  @HostBinding('class') get classes(): string {
    let className = 'section';
    if (this.selectedVersion) {
      className += ('version' + this.selectedVersion.version);
    }
    return className;
  };

  constructor(
    protected injector: Injector,
    protected httpClient: HttpClient
  ) {

  }

  ngOnInit(): void {
    this.getVersions().then(() => this.getDemos());
  }

  getVersions(): Promise<any> {
    const self = this;
    return new Promise((resolve, reject) => {
      this.httpClient.get('./assets/data/versions.json').subscribe(
        (response) => {
          if (response && Array.isArray(response)) {
            self.ontimizeVersions = response;
            self.selectedVersion = self.ontimizeVersions[0];
            resolve(true);
          } else {
            reject();
          }
        },
        error => {
          console.log(error);
          reject();
        }
      )
    });
  }

  getDemos(): void {
    const self = this;
    this.httpClient.get('./assets/data/demos.json').subscribe(
      (response) => {
        if (response && Array.isArray(response)) {
          self.data = response.filter((item: any) => item.version === self.selectedVersion.version)
        }
      },
      error => console.log(error)
    );
  }

  onVersionChanged(arg: any): void {
    this.selectedVersion = arg;
    this.getDemos();
  }

  openTab(url: string, e?: Event): void {
    if (e) {
      e.stopPropagation();
    }
    window.open(url, "_blank");
  }


}