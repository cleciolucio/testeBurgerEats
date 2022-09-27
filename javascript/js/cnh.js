function verificarIdade() {

    var nome = document.querySelector('input[name=nome]')
    var idade = document.querySelector('input[name=idade]')

    if (idade.value.length == 0) {
        alert('Idade é um campo obrigatório.')
        return
    }

    var idadeNum = parseInt(idade.value)

    if (idadeNum >= 18) {
        alert('Ok, voce pode tirar sua CNH.')
    } else if (idadeNum > 4) {
        alert('Voce é menor de idade, sugiro que ande de Bike.')
    } else {
        alert('Melhor voce tomar leite, kkkk. ')
    }


}