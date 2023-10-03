import { Component } from '@angular/core';
import investorsData from '../../investors.json';
import { Router } from '@angular/router';

interface Investors {
  id: Number;
  name: String;
  email: String;
  gender: String;
  capital: Number;
}


@Component({
  selector: 'app-manipulando-json',
  templateUrl: './manipulando-json.component.html',
  styleUrls: ['./manipulando-json.component.css']
})
export class ManipulandoJsonComponent {

  investors: Investors[] = investorsData;

  constructor(private router: Router) { }

  goToDetail(investor: Investors) {
    this.router.navigate(['/detalhe', investor.id]);
  }
}
