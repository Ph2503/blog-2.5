if(screen.width < 1030){ //identificador do tamanho da tela para a prevenção de bugs

    location.href  = 'mindex.html'



















}else{

    function voltar() {

        
        document.documentElement.scrollTop = 0
    }
    function anime() {
        var windowTop = window.pageYOffset; //váriavel do scroll
        console.log(windowTop)// declaração no console
        var seta = document.getElementById('seta')
        var quemsomos = document.getElementById("quem-somos-h1")
        var quemsomosp = document.getElementById('quem-somos-p')
        var serviços = document.getElementById('serviços-h1')
        var btvoltar2 = document.getElementById('volte')
        var serviçosp = document.getElementById('serviços-p')
        if(windowTop > 266) {
            quemsomos.classList.add('quem-somos-h1-scroll')
        }else {
            quemsomos.classList.remove('quem-somos-h1-scroll')
        }
        if(windowTop > 320) {
            quemsomosp.classList.add('quem-somos-p-scroll')
        }else {
            quemsomosp.classList.remove('quem-somos-p-scroll')
        }
        if(windowTop != 483) {
            seta.style.left = '220%'
        }
        if(windowTop >0) {
            btvoltar2.style.fontSize = '10px'
            btvoltar2.style.marginTop = '-35%'
            btvoltar2.style.transition = 'all 1s'
        }else {
            btvoltar2.style.fontSize = '30px'
            btvoltar2.style.transition = 'all 1s'
            btvoltar2.style.marginTop = '35%'
        }
        if(windowTop > 759) {
            serviços.classList.add('scrolly')
        }else {
            serviços.classList.remove('scrolly')
        }
        if(windowTop > 850) {
            serviçosp.classList.add('scrolly')
        }else {
            serviçosp.classList.remove('scrolly')
        }
        if(windowTop > 1291) {
            var divcompletawebsite = document.getElementById('websiteicon')
            divcompletawebsite.classList.add('scrolly')
        }else {
            var divcompletawebsite = document.getElementById('websiteicon')
            divcompletawebsite.classList.remove('scrolly')
        }
        if(windowTop > 1915) {
            var app = document.getElementById('appicon')
            var line = document.getElementById('line2')
            app.classList.add('scrolly')
            line.classList.add('scrolly')
        }else {
            var app = document.getElementById('appicon')
            var line = document.getElementById('line2')
            app.classList.remove('scrolly')
            line.classList.remove('scrolly')
        }
        if(windowTop > 2542) {
            var designm = document.getElementById('designmicon')
            designm.classList.add('scrolly')
        }else {
            var designm = document.getElementById('designmicon')
            designm.classList.remove('scrolly')
        }
    }

    window.addEventListener('scroll', function(){ //declarando a função para o scroll
        anime();
    });
}