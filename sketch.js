// fantasia, aventura, drama

// a viagem de chihiro, LIVRE, fantasia, aventura
// paddington, LIVRE, fantasia, aventura

// as aventuras de pi, 10, drama, fantasia, aventura
//depois da chuv, 10, drama
// guardiões da galáxia, 12, fantasia, aventura
// ladrões de bicicleta, 12, drama
// o menino que descobriu o vento, 14, drama

let campoIdade;
let campoFantasia;

function setup() {
  createCanvas(400, 400);
  campoIdade = createInput("5");
  createCheckbox("Gosta de fantasia?")
}

function draw() {
  background(220);
  let idade = campoIdade.value();
  let gostaDeFantasia = true;
  let recomendacao = geraRecomendacao(idade,
gostaDeFantasia);
  text(recomendacao, width / 2, height / 2);
}

function geraRecomendacao(idade) {
  if(idade >= 10) {
    if(idade >= 14) {
      return "O menino que descobriu o vento";
    } else {
      if(gostaDefantasia) {
        return "As aventuras de pi";
      } else{
        return "Depois da chuva";
      }
      return "As aventuras de pi";
    }
  } else {
    return "A viagem de chihiro";
  }
}

 