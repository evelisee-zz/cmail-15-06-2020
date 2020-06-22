import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { HttpClient, HttpResponseBase } from '@angular/common/http';
import { map, catchError } from 'rxjs/operators'

@Component({
  selector: 'cmail-cadastro',
  templateUrl: './cadastro.component.html',
  styles: [
  ]
})
export class CadastroComponent implements OnInit {
  
  constructor(
    private httpClient: HttpClient
  ) { }

  validaImagem(campoDoFormulario: FormControl){
    console.log(campoDoFormulario)
    return this.httpClient
      .head(campoDoFormulario.value, {
        observe: 'response'
      })
      .pipe(
        map((response: HttpResponseBase) => {
          console.log(response)
          return response.ok ? null : { urlInvalida: true}
        }),
      catchError((error) => {
        return [{urlInvalida: true}]
      })
      )
  }

  formCadastro = new FormGroup({
    nome: new FormControl('', [Validators.required, Validators.minLength(3)]),
    username: new FormControl('', [Validators.required]),
    senha: new FormControl('', [Validators.required]),
    telefone: new FormControl('', [Validators.required, Validators.pattern('[0-9]{4}-?[0-9]{4}[0-9]?')]),
    avatar: new FormControl('', [], this.validaImagem.bind(this)),
  })
  
  ngOnInit(): void {}


  validarTodosOsCamposDoFormulario(form: FormGroup){
    Object.keys(form.controls).forEach(field => {
      const control = form.get(field);
      control.markAsTouched({ onlySelf: true})
    })
  }

  handleCadastrarUsuario() {
    console.log(this.formCadastro)
    if(this.formCadastro.valid) {
      this.formCadastro.reset();
    } else {
      this.validarTodosOsCamposDoFormulario(this.formCadastro);
    }
  }

}
