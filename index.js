
function validarEmail(){
    const correo = document.querySelector('.email').value;
    let error = document.querySelector('.error');
    let mensaje = document.querySelector('.small-error');
    let enviado = document.querySelector('.small-ok');
    var reg = /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    var regOficial = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;

    if (reg.test(correo) && regOficial.test(correo)){
        mensaje.style.opacity=0;
        error.style.opacity=0;
        enviado.style.opacity = 1;
        

    }else if (regOficial.test(correo)){

        error.style.opacity=0;
        mensaje.style.opacity=0;
        enviado.style.opacity = 1;

    }else{
        error.style.opacity=1;
        mensaje.style.opacity=1;
        enviado.style.opacity = 0;
    
    }
}
