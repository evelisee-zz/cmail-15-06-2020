export class Email {
    destinatario = "";
    assunto = "";
    conteudo = "";
    dataDeEnvio = "";

    constructor(
            {destinatario, assunto, conteudo, dataDeEnvio}: {destinatario: string, assunto: string, conteudo: string, dataDeEnvio: string}
        ){
            this.destinatario = destinatario;
            this.assunto = assunto;
            this.conteudo = conteudo;
            this.dataDeEnvio = dataDeEnvio;
        }

    get introducaoDoConteudo() {
        let dots = "";
        if(this.conteudo.length > 140) {
            dots = "..."
        }
        return this.conteudo.substr(0, 140) + dots;
    }
}

