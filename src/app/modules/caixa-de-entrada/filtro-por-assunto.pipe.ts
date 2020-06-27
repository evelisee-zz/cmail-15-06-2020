import { Pipe, PipeTransform } from '@angular/core';
import { Email } from 'src/app/models/email';

@Pipe({
  name: 'filtroPorAssunto'
})
export class FiltroPorAssuntoPipe implements PipeTransform {

  transform(listaEmail: Email[], termoFiltro:string) {
    return listaEmail.filter(email => email.assunto.toLocaleLowerCase().includes(termoFiltro.toLocaleLowerCase()))
  }

}
