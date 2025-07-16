function calcular(tipo, valor) {
    if(tipo === 'acao') {

        if(valor === 'c') {
            //limpar visor
            document.getElementById('resultado').value = ''
        }

        if(valor === '+' || valor === '-' || valor === '*' || valor === '/' || valor === '.') {
            //concatenando os valores na tela
            document.getElementById('resultado').value += valor
        }

        if (valor === '=') {
            //exibindo o resultado na tela
            //eval = executa string como código JavaScript
            var resultado_final = eval(document.getElementById('resultado').value)
            document.getElementById('resultado').value = resultado_final
        }

    }else if(tipo === 'valor') {
        document.getElementById('resultado').value += valor
    }
}