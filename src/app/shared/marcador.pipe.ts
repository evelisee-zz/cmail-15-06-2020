import  { Pipe, PipeTransform } from '@angular/core';

@Pipe({
 name: 'marcador'
})

export class MarcadorPipe implements PipeTransform{
    transform(valor: string) {
        return Number(valor) * 0.2;
    }

}