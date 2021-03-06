(function() {
  var app = angular.module("frota");

  app.factory("Frota", function() {
    return {
      get: function() {
        return [
          {
            "combustivel": "Flex",
            "imagem": null,
            "marca": "Volkswagen",
            "modelo": "Gol",
            "placa": "FFF­5498",
            "cor": "Vermelho"
          },
          {
            "combustivel": "Gasolina",
            "imagem": null,
            "marca": "Volkswagen",
            "modelo": "Fox",
            "placa": "FOX­4125",
            "cor": null
          },
          {
            "combustivel": "Alcool",
            "imagem": "http://img.estadao.com.br/wp/jornal-do-carro/files/2012/08/FUSCA-1.jpg",
            "marca": "Volkswagen",
            "modelo": "Fusca",
            "placa": "PAI­4121",
            "cor": "Azul"
          }
        ];
      }
    }
  });
})();
