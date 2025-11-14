import { Component, Input } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.scss']
})

export class CardComponent {

  @Input() img!: string;
  @Input() icon!: string;
  @Input() title!: string;
  @Input() type!: string;
  @Input() description!: string;
  @Input() action!: string;

  constructor(private matIconRegistry: MatIconRegistry, private domSanitizer: DomSanitizer) {
    this.matIconRegistry.addSvgIconInNamespace('ontimize', 'github',
      this.domSanitizer.bypassSecurityTrustResourceUrl('assets/images/github.svg'));
  }
}