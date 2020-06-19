import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'cmail-cadastro',
  templateUrl: './cadastro.component.html',
  styles: [
  ]
})
export class CadastroComponent implements OnInit {

  isOkay = true;

  formCadastro = new FormGroup({
    nome: new FormControl('', Validators.required),
    username: new FormControl('', Validators.required),
    senha: new FormControl('', [Validators.required, Validators.minLength(2)]),
    avatar: new FormControl('', Validators.required),
  })

  constructor() { }

  ngOnInit(): void {
  }

  handleCadastrarUsuario() {
    console.log(this.formCadastro)
    if(this.formCadastro.invalid) {
      console.log('invalido')
    }
  }

}
