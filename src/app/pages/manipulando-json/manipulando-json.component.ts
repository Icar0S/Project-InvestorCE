import { Component } from '@angular/core';
import investorsData from '../../investors.json';
import { Router } from '@angular/router';
import { Investor } from 'src/app/models/investor';

@Component({
  selector: 'app-manipulando-json',
  templateUrl: './manipulando-json.component.html',
  styleUrls: ['./manipulando-json.component.css']
})
export class ManipulandoJsonComponent {

  investors: Investor[] = investorsData;

  constructor(private router: Router) { }

  goToDetail(investor: Investor) {
    this.router.navigate(['/detalhe', investor.id]);
  }
}
