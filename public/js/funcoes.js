
/*  Mostrar Cards Home */

function mostrarCardHome() {
 
    
    var qtdCard = 0;
    var card = document.querySelector("#cardHome") ;

    var titleDescricao =  [ 
        "Empolgante", 
        "Envolvente",
        "Emocionante"
     
     ];
    var descricao =  [ 
        "Do começo ao fim", 
        "Uma história rica em detalhes",
        "Você vai se emocionar"
     
     ];

     while (qtdCard < titleDescricao.length  ) {
         
        card.innerHTML += `<div class="diferencial">
                          <h2>${titleDescricao[qtdCard]}</h2>
                          <p>${descricao[qtdCard]}</p> 
                          </div>`   

                          qtdCard++

}

} 
    


    
/*  Mostrar Seasons */

function mostrarPersonagem() {
 
    
    var qtdPersonagem = 8;
    var personagem =  document.querySelector("#personagem") ;
    var nome = { "personagem" : [ 
        "Clementine", 
        "Lee Everett ",
        "Kenny",
        "Ravier Garcia",
        "Louis",
        "Luke",
        "Michonne",
        "Kate Garcia",
       
       ]};
    
     
    
    var  imagem = { "personagem": [ "../Imgs/clementine-character.png", 
        "../Imgs/lee-character.png",
        "../Imgs/ken-character.png",
        "../Imgs/ravier-character.png",
        "../Imgs/louis-character.png",
        "../Imgs/luke-character.png",
        "../Imgs/michonne-character.png",
        "../Imgs/kate-character.png"
      
    ]} ;
      
         var numero = { "personagem":  [ "1", "2", "3", "4","5","6","7","8",] }
    
      
    for (var  cont = 0; cont < qtdPersonagem; cont++) {
        personagem.innerHTML += `
       <div class="card-personagem">
            <div class="card-imagem" >
                <img src='${imagem.personagem[cont]}' class="card-img"/>
            </div>
           <div class="card-body">
            <h2 class="card-titulo">${nome.personagem[cont]}</h2>
            <h3>${numero.personagem[cont]}</h3>
           </div>
         
          </div>`
    
    } 
    
    }
    



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
        divAguardar.style.display = "none";
    }
    
}



