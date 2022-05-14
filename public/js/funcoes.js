/*  Mostrar cards */
function mostrarSeason() {
  var temp =  document.querySelector("#season");
  var qtdTemp = 4;

  var imgTemp = ["Imgs/season1.jpg","Imgs/season2.jpg","Imgs/season3.jpg","Imgs/season4.jpg",];

  var seasonName= ["TWD - New Age", "TWD - Insane","TWD - New Frontier","TWD - The Final Season",];

  var seasonNumber= ["Season One", "Season Two","Season Three","Season Four",];

for (var cont = 0; cont < qtdTemp; cont++) {
    temp.innerHTML += `
<div class="card">
<div class="card-header">
      <img src='${imgTemp[cont]}' class="card-img"/>
      </div>
       <div class="card-body">
        <h2 class="card-titulo">${seasonNumber[cont]}</h2>
        <h3>${seasonName[cont]}</h3>
       </div>
      <div class="card-footer"><a href="#">Curtir</a>
      </div>
      </div>`

  }
}

// sessão
function validarSessao() {
    // aguardar();

    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var idSessao = sessionStorage.ID_SESSAO;

    var h1LoginUsuario = document.getElementById("h1_login_usuario");

    if (email != null && nome != null) {
        // window.alert(`Seja bem-vindo, ${nome}!`);
        if (h1LoginUsuario != undefined) {
            h1LoginUsuario.innerHTML = email;
        }
        b_usuario.innerHTML = nome;
        b_id_sessao.innerHTML = idSessao;

        // finalizarAguardar();
    } else {
        window.location = "../login.html";
    }
}

function limparSessao() {
    // aguardar();
    sessionStorage.clear();
    // finalizarAguardar();
    window.location = "../login.html";
}



function finalizarAguardar(texto) {
    var divAguardar = document.getElementById("div_aguardar");
    divAguardar.style.display = "none";

    var divErrosLogin = document.getElementById("div_erros_login");
    if (texto) {
        divErrosLogin.innerHTML = texto;
    }
}







