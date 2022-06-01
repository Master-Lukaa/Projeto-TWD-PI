function validarSessao() {


    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    

    var h1LoginUsuario = document.getElementById("h1_login_usuario");

    if (email != null && nome != null) {
      
        if (h1LoginUsuario != undefined) {
            h1LoginUsuario.innerHTML = email;
        }
        b_usuario.innerHTML = nome;
     

      
    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    
    sessionStorage.clear();
    window.location = "../login.html";
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




/*  Mostrar Seasons */



function mostrarSeason() {
 
    
var qtdPersonagem = 8;
var personagem =  document.querySelector("#seasons") ;
var personagemNumber = [
    "Clementine", 
    "Lee Everett ",
    "Kenny",
    "Ravier Garcia",
    "Louis",
    "Luke",
    "Michonne",
    "Kate Garcia",
   
   
 ];

var  imgPersonagem = [
    "../Imgs/clementine-character.png",
    "../Imgs/lee-character.png",
    "../Imgs/ken-character.png",
    "../Imgs/ravier-character.png",
    "../Imgs/louis-character.png",
    "../Imgs/luke-character.png",
    "../Imgs/michonne-character.png",
    "../Imgs/kate-character.png",
  
     ];
  
     var  personagemName = [
        "1", 
        "2",
        "3",     
        "4",
        "5",
        "6",
        "7",
        "8",
    
    ];
  
  
  
for (var  cont = 0; cont < qtdPersonagem; cont++) {
    personagem.innerHTML += `
   <div class="card-temporada">
        <div class="card-header" >
            <img src='${imgPersonagem[cont]}' class="card-img"/>
        </div>
       <div class="card-body">
        <h2 class="card-titulo">${personagemNumber[cont]}</h2>
        <h3>${personagemName[cont]}</h3>
       </div>
     
      </div>`

} 





}