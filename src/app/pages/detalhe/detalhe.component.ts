import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-detalhe',
  templateUrl: './detalhe.component.html',
  styleUrls: ['./detalhe.component.css']
})

export class DetalheComponent implements OnInit {

  longText = `A média salarial anual da empresa XP Investimentos
  varia de aproximadamente R$ 98.800 para
  o cargo de Assessor De Investimentos a
  R$ 180.000 para o cargo de Analista Pleno.`;

  constructor(private route: ActivatedRoute) { }

  nome: string = "Investidor ";
  identificador: number = 0;
  phone: string = '';

  ngOnInit(): void {
    this.route.params.forEach((params: Params) => {
      if (params['id'] !== undefined) {
        this.identificador = +params['id'];
        console.log(this.identificador);
      }

      if (params['phone'] !== undefined) {
        this.phone = params['phone'];
        console.log(this.phone);
      }

    });
  }



}
