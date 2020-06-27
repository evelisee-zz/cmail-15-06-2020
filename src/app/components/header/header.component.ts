import { Component, OnInit } from '@angular/core';
import { PageDataService } from 'src/app/page-data.service';
import { HeaderService } from 'src/app/services/header.service';

@Component({
    selector:'cmail-header',
    templateUrl: './header.component.html',
    styleUrls: ['./header.component.css']
})  

export class HeaderComponent {
    private _isMenuOpen = false;
    tituloHeader = "";

    constructor(
        private pageData: PageDataService,
        private headerService: HeaderService
    ){
        this.pageData.title.subscribe((teste) => {
            this.tituloHeader = teste
        });
    }

    get isMenuOpen() {
        return this._isMenuOpen;
    }

    toggleMenu() {  
       this._isMenuOpen = !this._isMenuOpen;
    }

    handleBuscaChanges({ target }){
        this.headerService.atulizarTermoDeFiltro(target.value);
    }
}