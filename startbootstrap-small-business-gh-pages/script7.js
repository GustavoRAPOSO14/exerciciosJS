var valores = []

function adicionarValor() {
    var valorInput = document.getElementById('valor')
    var valor = parseInt(valorInput.value)
    if (!isNaN(valor)) {
        valores.push(valor)
        valorInput.value = ""
        valorInput.focus()
        document.getElementById('exibir').innerHTML = "Valor Adicionado"
    }
    else {
        document.getElementById('exibir').innerHTML = "Valor inválido"
    }
}

function adicionarcomEnter (event) {
    if (event.keyCode === 13) {
        adicionarValor()
    }
}

function mostrarValor () {
    if (valores.length > 0) {
        document.getElementById('exibir').innerHTML = "Os valores adicionados foram:" + valores.join(", ")
    }
    else {
        document.getElementById('exibir').innerHTML = "Nenhum valor foi adicionado"
    }
}

function maiorValor() {
    if (valores.length > 0) {
        var maiorValor = Math.max.apply(null, valores);
        document.getElementById('exibir').innerHTML = "O maior valor é" + maiorValor 
    }
    else {
        document.getElementById('exibir').innerHTML = "Nenhum valor for adicionado"
    }
}

function menorValor() {
    if (valores.length > 0) {
        var menorValor = Math.min.apply(null, valores);
        document.getElementById('exibir').innerHTML = "O menor valor é" + menorValor 
    }
    else {
        document.getElementById('exibir').innerHTML = "Nenhum valor for adicionado"
    }
}