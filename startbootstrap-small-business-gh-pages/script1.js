var soma = 0

function exibir() {
    document.getElementById('res').innerHTML=""
    let num = document.getElementById('v1').value
    for (let i= 2; i <= num; i += 2 ) {
        var t=document.createTextNode( i+" - ")
        document.getElementById('res').appendChild(t)
        document.getElementById('resul').innerHTML = soma += i

    }
}
