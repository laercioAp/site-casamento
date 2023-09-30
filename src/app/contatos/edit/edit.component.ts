import { Component, OnInit } from '@angular/core';
import { Contato } from '../shared/contato';
import { ContatoDataService } from '../shared/contato-data.service';
import { ContatoService } from '../shared/contato.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  contato: Contato = new Contato();
  key: string = '';
  selectedOption: string = '1'; 

  constructor(private contatoService: ContatoService, private contatoDataService: ContatoDataService) { }

  ngOnInit(): void {
    this.contatoDataService.currentContato.subscribe(data => {
      if (data.contato && data.key) {
        this.contato.nome = data.contato.nome;
        this.contato.email = data.contato.email;
        this.contato.telefone = data.contato.telefone;
        this.contato.adultos = data.contato.adultos
        this.contato.criancas = data.contato.criancas
        this.key = data.key;
      }
    });
  }

  onSubmit() {
    if (this.key) {
      this.contatoService.update(this.contato, this.key);
    } else {
      this.contatoService.insert(this.contato);
    }

    this.contato = new Contato();
  }
}
