// funcao para o calculo
function calcularBhaskara (a, b, c){
    if (a === 0) throw new Error("O coeficiente 'a' não pode ser zero.")
        // math.pow calcula potencia do delta
        const delta = Math.pow(b, 2) - 4 * a * c
    if (delta < 0){
        return {tipo: 'complexa', mensagem: "As raízes são complexas."}
    }
    // calculo das duas raizes reais, e o 'Math.sqrt' vai fazer o calculo da raiz de delta:
    const x1 = (-b + Math.sqrt(delta)) / (2 * a)
    const x2 = (-b - Math.sqrt(delta)) / (2 * a)

    return{
        tipo: 'real',
        delta,
        x1: parseFloat(x1.toFixed(2)),
        x2: parseFloat(x2.toFixed(2))
    }
}

// manipulacao da interface
    // pesca dos elementos do html
const btnCalcular = document.getElementById('btn-calcular')
const btnLimpar = document.getElementById('btn-limpar')
const display = document.getElementById('display-resultado')

// "observador" de eventos com arrow
btnCalcular.addEventListener('click', () =>{
    const a = Number(document.getElementById('coeff-a').value)
    const b = Number(document.getElementById('coeff-b').value)
    const c = Number(document.getElementById('coeff-c').value)

    // reset visual
    display.className = ''
    display.classList.remove('hidden')

    // vou construir um try pra mostrar a mensagem de erro
    try{
        if (!document.getElementById('coeff-a').value || !document.getElementById('coeff-b').value || !document.getElementById('coeff-c').value )
            throw new Error("Preencha todos os campos corretamente") 
        
        const resultado = calcularBhaskara(a, b, c)

        if (resultado.tipo === 'complexa'){
            display.innerText = resultado.mensagem
            display.classList.add('error')
        } else {
            display.classList.add('success')
            display.innerHTML = resultado.delta === 0 
                ? `Raiz Única: x = ${resultado.x1}` 
                : `x1 = ${resultado.x1} <br> x2 = ${resultado.x2}`;
        }
    }catch (error){
            display.innerText = error.message
            display.classList.add('error')}
})

// botao de limpar
btnLimpar.addEventListener("click", () =>{
    document.querySelectorAll('input').forEach(input => input.value = '')
    display.classList.add('hidden')
})