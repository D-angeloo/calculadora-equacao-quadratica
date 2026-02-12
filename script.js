// funcao para o calculo
function calcularBhaskara (a, b, c){
    if (a === 0) throw new Error("O coeficiente 'a' não pode ser zero.")
        // math.pow calcula potencia do delta
        const delta = Math.pow(b, 2) - 4 * a * c

    // calculo das duas raizes reais, e o 'Math.sqrt' vai fazer o calculo da raiz de delta:
    const x1 = (-b + Math.sqrt(delta)) / (2 * a)
    const x2 = (-b - Math.sqrt(delta)) / (2 * a)
}