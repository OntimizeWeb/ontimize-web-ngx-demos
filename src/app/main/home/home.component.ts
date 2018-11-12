import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(
    private router: Router,
    private actRoute: ActivatedRoute
  ) {
  }

  ngOnInit() {
  }

  getStaticData() {
    return [
      {"id": "quickstart",
        "name" : "Quickstart",
        "description": "Ola k ase",
        "icon" : "http://www.ontimize.com/wp-content/uploads/2015/01/logo60.png",
        "url" : "https://try.imatia.com/ontimizeweb/quickstart/main/home"  
    }

    ];
  }

  onGridItemClicked(evt) {
    console.log("ola k ase");
  }

}
