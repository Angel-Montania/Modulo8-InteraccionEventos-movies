window.onload = function(){
    let body = document.querySelector('body');
    let moviesListTitulo = document.querySelector('.moviesListTitulo');
    let figure = document.querySelector("figure");

    figure.onmouseover = function () {
        if(!body.classList.contains('fondoMoviesList')) {
            body.style.backgroundColor = '#7f7f7f'
            body.classList.toggle('fondoMoviesList');
        } else {
            body.style.backgroundColor = ''
            body.classList.toggle('fondoMoviesList');
        }
    }
    
    console.log(body);
    moviesListTitulo.innerHTML = 'LISTADO DE PELÍCULAS';
    moviesListTitulo.style.color ='white';
    moviesListTitulo.style.backgroundColor = 'teal';
    moviesListTitulo.style.padding = '20px';

}