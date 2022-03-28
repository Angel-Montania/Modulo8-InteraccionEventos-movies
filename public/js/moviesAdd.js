window.onload = function () {
    let titulo = document.querySelector('.moviesAddTitulo')
    let formulario = document.querySelector('#formulario');
    let article = document.querySelector('article');
    let inpSecret = document.querySelector("#titulo")
    titulo.innerHTML = 'AGREGAR PELÍCULA';
    titulo.classList.add('titulo');
    article.classList.add('fondoTransparente');
    formulario.classList.add('fondoCRUD');

    titulo.onmouseover = function () {
        if (titulo.style.color == "blue") {
            titulo.style.color = "black"
        } else {
            titulo.style.color = "blue"
        }
    };

    var estadoSecreto = 0

    inpSecret.onkeypress = function (event) {
        console.log(event.key)
        switch (event.key) {
            case "s" || "S":
                estadoSecreto = 1;
                console.log(estadoSecreto)
                break;
            case "e" || "E":
                if(estadoSecreto == 1) {
                    estadoSecreto = 2;
                    console.log(estadoSecreto);
                    console.log("Primera E")
                    break;
                } else if(estadoSecreto == 4) {
                    estadoSecreto = 5
                    console.log(estadoSecreto);
                    console.log("segunda E");
                    break;
                };
            case "c" || "C":
                if(estadoSecreto == 2) estadoSecreto = 3;
                console.log(estadoSecreto);
                break;
            case "r" || "R":
                if(estadoSecreto == 3) estadoSecreto = 4;
                console.log(estadoSecreto);
                break;
            case "t" || "T":
                if(estadoSecreto == 5) {
                    estadoSecreto = 6
                    console.log(estadoSecreto);
                };
                break;
            case "o" || "O":
                if(estadoSecreto == 6) {
                    estadoSecreto = 0
                    alert("Secreto Magico")
                };
                break;
            default:
                estadoSecreto = 0
                break;
        }
    }

}