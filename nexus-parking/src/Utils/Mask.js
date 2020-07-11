const plateMask = value => {
    return value
    .replace(/(\D)(\d{3})$/,"$1-$2")//Coloca hífen entre o teceiro e o quarto dígito
    .replace(/(\D{3})(\D)$/, "$1")//Não deixar digitar mais qualquer caracteres depois de 3 digitos
    .replace(/(\d{4})(\d)$/, "$1")//Não deixar digitar mais qualquer caracteres depois de 4 numeros
    .toUpperCase()//transformar todas as letras maiúsculas
}

const cleanMask = value => {
    return value
    .replace(/([^0-9a-zA-Z])/g, '') //Substitui qualquer caracter que não seja numero ou letra por nada
}

const viewPlate = value => {
    return value
    .replace(/(\d)(\d{3})$/,"-$1$2")//Coloca hífen entre o teceiro e o quarto dígito
    .toUpperCase() 
}

const phoneMask = value => {
    return value
    .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
    .replace(/(\d{2})(\d)/,"($1) $2") //Coloca parênteses em volta dos dois primeiros dígitos
    .replace(/(\d)(\d{4})$/,"$1-$2")  //Coloca hífen entre o quarto e o quinto dígito
}

const cpfMask = value => {
    return value
    .replace(/\D/g, '') // substitui qualquer caracter que nao seja numero por nada
    .replace(/(\d{3})(\d)/, '$1.$2') // captura 2 grupos de numero o primeiro de 3 e o segundo de 1, apos capturar o primeiro grupo ele adiciona um ponto antes do segundo grupo de numero
    .replace(/(\d{3})(\d)/, '$1.$2')
    .replace(/(\d{3})(\d{1,2})/, '$1-$2')
    .replace(/(-\d{2})\d+?$/, '$1') // captura 2 numeros seguidos de um traço e não deixa ser digitado mais nada    
}

export { plateMask, cleanMask, viewPlate, phoneMask, cpfMask };