class Publicador {
    constructor() {
       
        this.botao = document.getElementById('enviar');
        this.numero1 = document.getElementById('numero1');
        this.numero2 = document.getElementById('numero2');
        this.saida = document.getElementById('output');
        
        
        this.botao.addEventListener('click', () => this.exibirTexto());
    }

    exibirTexto() {
        
        const texto1 = this.numero1.value;
        const texto2 = this.numero2.value;
        const soma = Number(texto1) + Number(texto2);
        
        this.saida.textContent = soma;
    }
}


window.onload = () => {
    new Publicador();
};
