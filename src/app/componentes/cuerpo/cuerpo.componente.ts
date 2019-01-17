import { Component } from '@angular/core';

@Component({selector: 'app-cuerpo',
templateUrl: './cuerpo.componente.html'})
export class CuerpoComponente{
    mostrar = true;
    mensaje: any = {
        'texto': 'Aca estamos mejorando con el Angular nuevo',
        'autor': 'Yo quien más va a ser'
    };
    personas: string[] = ['Kuchen, German', 'Perez, Pablo', 'Jackson, Michael'];
}
