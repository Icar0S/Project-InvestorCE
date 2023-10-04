import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-sub-route',
  templateUrl: './sub-route.component.html',
  styleUrls: ['./sub-route.component.css']
})
export class SubRouteComponent {

  constructor(private route: ActivatedRoute, private router: Router) { }

  coins() {
    this.router.navigate(['empresas'], { relativeTo: this.route });
  }
  notes() {
    this.router.navigate(['fundos'], { relativeTo: this.route });
  }
}
