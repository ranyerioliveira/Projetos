function verificar(){
    var data = new Date()
    var ano = data.getFullYear()
    var fano= window.document.getElementById('txtano')
    var res = window.document.getElementById('res')
    if (fano.value.length == 0 || Number(fano.value) > ano){
        window.document.alert('[ERRO] Verificar os dados e tente novamente')
    }else{
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fano.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if(fsex[0].checked){
            genero = 'Homem'
            if(idade >= 0 && idade <= 10){
                //criança
                img.setAttribute('src', 'img/bebemenino.webp')
            }else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'img/jovemhomem.webp')
            }else if(idade<50){
                //Alduto
                img.setAttribute('src', 'img/homem.webp')
            }else{
                //idoso
                img.setAttribute('src', 'img/idoso.webp')
            }
        } else if (fsex[1].checked){
            genero = 'Mulher'
            if(idade >= 0 && idade <= 10){
                //criança
                img.setAttribute('src', 'img/bebemenina.webp')
            }else if (idade < 21){
                //Jovem
                img.setAttribute('src', 'img/jovemmulher.webp')
            }else if(idade<50){
                //Alduto
                img.setAttribute('src', 'img/mulher.webp')
            }else{
                //idoso
                img.setAttribute('src', 'img/idosa.webp')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = `Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }

}