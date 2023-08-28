import {Component, OnInit} from '@angular/core';
import {HttpClient} from "@angular/common/http";

export class Pessoa {
  nome!: string;
  cpf!: string;
  idade!: number;
  campo1!: string;
  campo2!: string;
  campo3!: string;
  endereco = new Endereco();

  constructor(json?: any) {
    if (json) {
      this.nome = json.nome;
      this.cpf = json.cpf;
      this.endereco = new Endereco(json.endereco);
      this.idade = json.idade;
      this.campo1 = json.campo1;
      this.campo2 = json.campo2;
      this.campo3 = json.campo3;
    }
  }
}

export class Endereco {
  logradouro!: string;
  bairro!: string;
  complemento!: string;

  constructor(json?: any) {
    if (json) {
      this.logradouro = json.logradouro;
      this.bairro = json.bairro;
      this.complemento = json.complemento;
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
  umaPessoa: Pessoa = new Pessoa({nome: 'Gilberto', cpf: '12345678901', idade: 50, endereco: new Endereco({logradouro: 'Thiago da Fonseca'})});

  constructor(private httpClient: HttpClient) {
  }

  ngOnInit(): void {
    this.pessoa = new Pessoa();

  }

  enviar(): void {
    console.log('Vai enviar os dados da pessoa para o backend: ' + JSON.stringify(this.pessoa));
    this.httpClient.post('http://localhost:8080/pessoas', this.pessoa).subscribe({
      next: () => console.log(''),
      error: (erros: any) => console.log(JSON.stringify(erros.error))
    })
  }

  print(): string {
    return `{
      nome: string
      cpf: string
      idade: number
      endereco: Endereco
    }`;
  }
}
