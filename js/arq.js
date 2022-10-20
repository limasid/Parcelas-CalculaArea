function calc() {
    let vlcompra = parseFloat(document.getElementById("vldacompra").value)
    let qtparcela = parseInt(document.getElementById("qtdeparcela").value)
    
    if (vlcompra == null || qtparcela == NaN) {
        document.getElementById('vldaparcela').value = 'Insira o Valor de Compra'
        document.getElementById('vldaparcela').style.background = '#f00000'
        document.getElementById('vldaparcela').style.textAlign = 'center'
        document.getElementById('vldaparcela').style.color = 'white'
    } else if (qtparcela == 0) {
        document.getElementById('vldaparcela').value = 'Selecione uma opção'
        document.getElementById('vldaparcela').style.background = '#f00000'
        document.getElementById('vldaparcela').style.textAlign = 'center'
        document.getElementById('vldaparcela').style.color = 'white'
    } else if (qtparcela == 1) {
        document.getElementById('vldaparcela').value = vlcompra
        document.getElementById('vldaparcela').style.textAlign = 'center'
        document.getElementById('vldaparcela').style.background = '#f1f000'
    } else if (qtparcela == 2) {
        vlparcela = parseFloat(document.getElementById("vldacompra").value)
        vlparcela = (vlparcela + (vlparcela * 0.025)) / 2
        document.getElementById('vldaparcela').value = vlparcela
                document.getElementById('vldaparcela').style.background = '#f1f001'

    } else if (qtparcela == 3) {
        vlparcela = parseFloat(document.getElementById("vldacompra").value)
        vlparcela = (vlparcela + (vlparcela * 0.030)) / 3
        document.getElementById('vldaparcela').value = vlparcela
                document.getElementById('vldaparcela').style.background = '#f1f002'

    } else if (qtparcela == 4) {
        vlparcela = parseFloat(document.getElementById("vldacompra").value)
        vlparcela = (vlparcela + (vlparcela * 0.035)) / 4
        document.getElementById('vldaparcela').value = vlparcela
                document.getElementById('vldaparcela').style.background = '#f1f003'

    } else if (qtparcela == 5) {
        vlparcela = parseFloat(document.getElementById("vldacompra").value)
        vlparcela = (vlparcela + (vlparcela * 0.040)) / 5
        document.getElementById('vldaparcela').value = vlparcela
                document.getElementById('vldaparcela').style.background = '#f1f004'

    } else if (qtparcela == 6) {
        vlparcela = parseFloat(document.getElementById("vldacompra").value)
        vlparcela = (vlparcela + (vlparcela * 0.045)) / 6
        document.getElementById('vldaparcela').value = vlparcela
                document.getElementById('vldaparcela').style.background = '#f1f005'

    } else if (qtparcela == 7) {
        vlparcela = parseFloat(document.getElementById("vldacompra").value)
        vlparcela = (vlparcela + (vlparcela * 0.050)) / 7
        document.getElementById('vldaparcela').value = vlparcela
                document.getElementById('vldaparcela').style.background = '#f1f006'

    } else if (qtparcela == 8) {
        vlparcela = parseFloat(document.getElementById("vldacompra").value)
        vlparcela = (vlparcela + (vlparcela * 0.055)) / 8
        document.getElementById('vldaparcela').value = vlparcela
                document.getElementById('vldaparcela').style.background = '#f1f007'

    } else if (qtparcela == 9) {
        vlparcela = parseFloat(document.getElementById("vldacompra").value)
        vlparcela = (vlparcela + (vlparcela * 0.060)) / 9
        document.getElementById('vldaparcela').value = vlparcela
                document.getElementById('vldaparcela').style.background = '#f1f008'

    } else if (qtparcela == 10) {
        vlparcela = parseFloat(document.getElementById("vldacompra").value)
        vlparcela = (vlparcela + (vlparcela * 0.065)) / 10
        document.getElementById('vldaparcela').value = vlparcela
                document.getElementById('vldaparcela').style.background = '#f1f009'

    }
}

function calcarea1() {
    var larg = document.querySelector(".um").clientWidth
    var alt = document.querySelector(".um").clientHeight
    let area01 = larg * alt + "px"
    document.getElementById("area01").value = area01
    document.getElementById("area01").style.background = "rgb(94, 82, 82)"
    document.getElementById("area01").style.color = "white"
    document.getElementById("area01").style.textAlign = "center"
    
}
function calcarea2() {
    var larg = document.querySelector(".dois").clientWidth
    var alt = document.querySelector(".dois").clientHeight
    let area02 = larg * alt + "px".charAt(0)
    document.getElementById("area02").value = area02
    document.getElementById("area02").style.background = "rgb(173, 31, 31)"
    document.getElementById("area02").style.textAlign = "center" 
}

function calcareatotal() {
    var larg = document.querySelector(".um").clientWidth
    var alt = document.querySelector(".um").clientHeight
    let area01 = larg * alt

    var larg = document.querySelector(".dois").clientWidth
    var alt = document.querySelector(".dois").clientHeight
    let area02 = larg * alt 

    document.getElementById("areattl").value = "Ar1: " + area01 + " / Ar2: " + area02
    document.getElementById("areattl").style.background = "green"
    document.getElementById("areattl").style.color = "white"
    document.getElementById("areattl").style.textAlign = "center"
    
}
