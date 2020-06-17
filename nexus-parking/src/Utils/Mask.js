const plateMask = value => {
    return value.replace(/(\d)(\d{3})$/,"$1-$2")  //Coloca hífen entre o teceiro e o quarto dígito
}

export {plateMask};