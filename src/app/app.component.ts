import {Component, OnInit} from '@angular/core';

export class Pessoa {
  nome!: string;
  sobrenome!: string;
  endereco!: string;

  constructor(json?: any) {
    if (json) {
      this.nome = json.nome;
      this.sobrenome = json.sobrenome;
      this.endereco = json.endereco;
    }
  }
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  title = 'exemplo2';

  pessoa!: Pessoa;
  umaPessoa: Pessoa = new Pessoa({nome: 'Gilberto', sobrenome: 'Rodrigues', endereco: 'Thiago da Fonseca'});

  ngOnInit(): void {
    this.pessoa = new Pessoa();

  }

  enviar(): void {
    console.log('Vai enviar os dados da pessoa para o backend: ' + JSON.stringify(this.pessoa));
  }

  print(): string {
    return `{
      nome: string
      sobrenome: string
      endereco: string
    }`;
  }
}
