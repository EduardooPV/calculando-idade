function verificar() {
    var data = new Date() 
    var ano = data.getFullYear() // Pegando ano atual
    var nome = document.getElementById('nome').value; // Pegando o nome
    var fano = document.getElementById('txtano') // Ano digitado 
    var res = document.querySelector('div#res') // Resposta que vai aparecer na tela
    if (fano.value.length == 0 || Number(fano.value) > ano) {
        alert('Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')// Criando uma foto
        img.setAttribute('id', 'foto') // Colocando o ID = foto
        if (fsex[0].checked) { // Se homem foi selecionado
            genero = 'Homem'
            if (idade >= 0 && idade < 4) {
                res.innerHTML = `Olá, <strong>${nome}</strong>! você é um <strong>bebê</strong> com <strong>${idade} anos!</strong>`
                img.setAttribute('src', 'bebehomem.png')
            } else if (idade < 8) {
                res.innerHTML = `Olá, <strong>${nome}</strong>! você é um <strong>garoto</strong> com <strong>${idade} anos!</strong>`
                img.setAttribute('src', 'criancahomem.png')
            } else if (idade < 18) {
                res.innerHTML = `Olá, <strong>${nome}</strong>! você é um <strong>adolescente</strong> com <strong>${idade} anos!</strong>`
                img.setAttribute('src', 'adolescentehomem.png')
            } else if (idade < 50) {
                res.innerHTML = `Olá, <strong>${nome}</strong>! você é um <strong>adulto</strong> com <strong>${idade} anos!</strong>`
                img.setAttribute('src', 'adultohomem.png')
            } else {
                res.innerHTML = `Olá, <strong>${nome}</strong>! você é um <strong>idoso</strong> com <strong>${idade} anos!</strong>`
                img.setAttribute('src', 'velhohomem.png')
            }
        } else if (fsex[1].checked) { // Mulher selecionada
            genero = 'Mulher'
            if (idade >= 0 && idade < 4) {
                res.innerHTML = `Olá, <strong>${nome}</strong>! você é uma <strong>bebê</strong> com <strong>${idade} anos!</strong>`
                img.setAttribute('src', 'bebemulher.png')
            } else if (idade < 8) {
                res.innerHTML = `Olá, <strong>${nome}</strong>! você é uma <strong>garota</strong> com <strong>${idade} anos!</strong>`
                img.setAttribute('src', 'criancamulher.png')
            } else if (idade < 18) { 
                res.innerHTML = `Olá, <strong>${nome}</strong>! você é uma <strong>adolescente</strong> com <strong>${idade} anos!</strong>`
                img.setAttribute('src', 'adolescentemulher.png')
            } else if (idade < 50) {
                res.innerHTML = `Olá, <strong>${nome}</strong>! você é uma <strong>adulta</strong> com <strong>${idade} anos!</strong>`
                img.setAttribute('src', 'adultomulher.png')
            } else {
                res.innerHTML = `Olá, <strong>${nome}</strong>! você é uma <strong>idosa</strong> com <strong>${idade} anos!</strong>`
                img.setAttribute('src', 'velhomulher.png')
            }
        } else {
            res.innerHTML = `Olá, <strong>${nome}</strong>! você faz parte do(a) <strong>LGBT</strong> com <strong>${idade} anos!</strong>`
            img.setAttribute('src', 'lgbt.png')
        }
        res.style.textAlign = 'center'
        res.appendChild(img) // Mostrar a foto na tela
    }
}