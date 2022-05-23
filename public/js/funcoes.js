function validarSessao() {


    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var idSessao = sessionStorage.ID_SESSAO;

    var h1LoginUsuario = document.getElementById("h1_login_usuario");

    if (email != null && nome != null) {
      
        if (h1LoginUsuario != undefined) {
            h1LoginUsuario.innerHTML = email;
        }
        b_usuario.innerHTML = nome;
        b_id_sessao.innerHTML = idSessao;

      
    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    
    sessionStorage.clear();
    window.location = "../login.html";
}


/*  Mostrar cards */

var qtdTemporada = 4;

var imgTemporada = [
    "../Imgs/season1.jpg",
    "../Imgs/season2.jpg",
    "../Imgs/season3.jpg",
    "../Imgs/season4.jpg",];
  
    var seasonName = [
    "TWD - New Age", 
    "TWD - Insane",
    "TWD - New Frontier",
    "TWD - The Final Season",];
  
    var seasonNumber = [
        "Season One", 
        "Season Two",
        "Season Three",
        "Season Four",];
  
        mostrarSeason();

function mostrarSeason() {
  var temporada =  document.querySelector("#seasons") ;
  
for (var cont = 0; cont < qtdTemporada; cont++) {
    temporada.innerHTML += `
<div class="card-temporada">
<div class="card-header" onclick="curtir()">
      <img src='${imgTemporada[cont]}' class="card-img"/>
      </div>
       <div class="card-body">
        <h2 class="card-titulo">${seasonNumber[cont]}</h2>
        <h3>${seasonName[cont]}</h3>
       </div>
      <div class="card-footer">
      </div>
      </div>`

  }
} 

/* Curtir */

function curtir(){
    
    

   
    



}




function aguardar() {
    var divAguardar = document.getElementById("div_aguardar");
     divAguardar.style.display = "flex";
}


function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.innerHTML = texto;
    }
}



