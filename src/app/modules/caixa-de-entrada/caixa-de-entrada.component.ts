import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmailService } from 'src/app/services/email.service';
import { PageDataService } from 'src/app/page-data.service';
import { HeaderService } from 'src/app/services/header.service';

@Component({
  selector: 'cmail-caixa-de-entrada',
  templateUrl: './caixa-de-entrada.component.html',
  styles: [`
    ul, li {
      margin: 0;
      padding: 0;
      list-style-type: none;
    }
  `]
})
export class CaixaDeEntradaComponent  implements OnInit{
  private _isNewEmailFormOpen = false;
  emailList = [];
  termoParaFiltro = "";
  teste = "eve@gmail.com";
  email = {
    destinatario: '',
    assunto: '',
    conteudo: '',
    id: ''
  }
  valor = "";

  constructor(
    private emailService: EmailService,
    private pageData: PageDataService,
    private headerService: HeaderService
  ) {}

  ngOnInit() {
    this.pageData.atualizaTitulo('Caixa de Entrada');

    this.emailService.listar()
    .subscribe(lista => {
      this.emailList = lista
    });

    this.headerService.valorDoFiltro.subscribe(novoValor => {
      this.termoParaFiltro = novoValor
    });
  }

  get isNewEmailFormOpen(){
    return this._isNewEmailFormOpen;
  }

  toggleNewEmailForm(){
    this._isNewEmailFormOpen = !this._isNewEmailFormOpen;
  }

  handle(event){
    this.valor = event;
  }

  filtrarEmailPorAssunto() {
    const termoParaFiltoEmMinusco = this.termoParaFiltro.toLowerCase();

    return this.emailList.filter( email => {
      const assunto = email.assunto.toLowerCase();
      return assunto.includes(termoParaFiltoEmMinusco);
    })
  }

  handleNewEmail(formEmail: NgForm) {

    if(formEmail.invalid) return ; 
    
    this.emailService
      .enviar(this.email)
      .subscribe(
        emailApi => {
          this.emailList.push(emailApi)
          this.email = {
            destinatario: '',
            assunto: '',
            conteudo: '',
            id: ''
          }
          formEmail.reset();
        }
        , erro => console.log(erro)
      )
      

  }

  handleRemoveEmail(emailId) {
    this.emailService
      .deletar(emailId)
      .subscribe(res => {
        this.emailList = this.emailList.filter(email => email.id != emailId);
      }
      ,err => console.log(err))
  }

  

}
