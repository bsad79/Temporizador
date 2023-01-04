let contando = false
let intervalo
let agora
let tempoRestante
let minutos
let segundos
let relogioMinutos = document.getElementById("relogioMinutos")
let relogioSegundos = document.getElementById("relogioSegundos")
let botao = document.getElementById("botao")
let estadoDoBotao = "iniciar"
let minutoInicial = "05"
let segundoInicial = "00"

function pressionar() {
  if (estadoDoBotao == "iniciar") {
    minutoInicial = relogioMinutos.value
    segundoInicial = relogioSegundos.value
    contando = true
    botao.innerHTML = "Reiniciar"
    estadoDoBotao = "Reiniciar"
  }
  else {
    relogioMinutos.value = minutoInicial
    relogioSegundos.value = segundoInicial
    contando = false
    botao.innerHTML = "Iniciar"
    estadoDoBotao = "iniciar"
  }
  intervalo = new Date("Jan 1, 2023 00:" + relogioMinutos.value + ":" + relogioSegundos.value).getTime()
  agora = new Date("Jan 1, 2023 00:00:00").getTime()
}

function verificacao(e) {
  if (e.target.valueAsNumber < 10) {
    e.target.value = "0" + e.target.value 
  }
}

var x = setInterval(function() {
    if (contando == true) {
        agora += 1000
        tempoRestante = intervalo - agora
        minutos = Math.floor((tempoRestante % (1000 * 60 * 60)) / (1000 * 60))
        segundos = Math.floor((tempoRestante % (1000 * 60)) / 1000)

        if (tempoRestante < 0) {
            //clearInterval(x)
            relogioMinutos.value = minutoInicial
            relogioSegundos.value = segundoInicial
            contando = false
            botao.innerHTML = "Iniciar"
            estadoDoBotao = "iniciar"
        }
        else {
            if (minutos < 10) {
                relogioMinutos.value = "0" + minutos
            }
            else {
              relogioMinutos.value = minutos
            }
            if (segundos < 10) {
                relogioSegundos.value = "0" + segundos
            }
            else {
              relogioSegundos.value = segundos
            }
        }
    }
}, 1000)