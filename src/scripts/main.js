document.addEventListener('DOMContentLoaded', function(){

    const heroSection = document.querySelector('.hero');
    const altura = heroSection.clientHeight;

    window.addEventListener('scroll', function() {
        const posicao =window.scrollY;

        if(posicao < altura){
            oculta();
        } else {
            remove();
        }

    })

    function oculta (){
        const header = document.querySelector('.header')
        header.classList.add('header--is-hidden');
    }

    function remove (){
        const header = document.querySelector('.header')
        header.classList.remove('header--is-hidden');
    }

})