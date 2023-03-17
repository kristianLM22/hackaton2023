/* Programando a lógica de contabilizar o time da operação */
var sec = 00
var min = 00
var hr = 00
var interval

function tempo(){
    interval = setInterval(time,1000)
}

function time(){
    sec ++
    if(sec == 60){
        min++
        sec=00
    }
    if(min == 60){
        hr++
        min =00
    }
    document.getElementById('time').innerText=hr+":"+min+":"+sec
}

function pausar(){
    clearInterval(interval)
}


let botaoPesquisar = document.getElementById('btnPesquisar')
// coordenadas do centro da área delimitada
const centroArea = {lat: -22.922807530954472, lng: -46.546040645186665};

// raio da área delimitada em metros
const raioArea = 1000;

function dentroDaArea(lat, lng) {
  // coordenadas do usuário
  const usuario = {lat, lng };

  // calcula a distância em metros entre o usuário e o centro da área delimitada
  const distancia = google.maps.geometry.spherical.computeDistanceBetween(
    new google.maps.LatLng(usuario),
    new google.maps.LatLng(centroArea)
  );

  // retorna true se a distância for menor ou igual ao raio da área delimitada
  if (distancia <= raioArea){
    botaoPesquisar.addEventListener("click", function(event){
        window.location.href = "http://127.0.0.1:5500/segundaTela.html"
        
    })
  }else{
    botaoPesquisar.addEventListener("click", function(event){
        window.location.href = "http://127.0.0.1:5500/"
        alert("Não pode acessar a pagina");
    })
  }
}


if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(
      (posicao) => {
        // sucesso: as coordenadas estão na propriedade "coords"
        const lat = posicao.coords.latitude;
        const lng = posicao.coords.longitude;
        dentroDaArea(lat , lng)

      },
      (erro) => {
        // erro: exibe uma mensagem de erro
        console.error(`Erro ao obter as coordenadas: ${erro.message}`);
      }
    );
  } else {
    // o navegador não suporta geolocalização
    console.error("Geolocalização não suportada");
  }

  


