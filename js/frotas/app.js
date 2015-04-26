(function(){
  var app = angular.module("frota", []);

  app.controller("FrotaController", function(){
    this.products = frota;
    this.carro = {};

    this.newCarro = function(){
      this.carro = {};
      $("#new.modal").modal();
    };

    this.createCarro = function(){
      this.products.push(this.carro);
      $("#new.modal").modal("hide");
    };

    this.editCarro = function(carro){
      this.carro = carro;
      $("#edit.modal").modal();
    };

    this.updateCarro = function(){
      $("#edit.modal").modal("hide");
    }

    this.deleteCarro = function(carro){
      var index = this.products.indexOf(carro);
      if (index != -1) {
        this.products.splice(index, 1);
      }
    };
  });

  app.directive("carroForm", function(){
    return {
      restrict: "A",
      templateUrl: "templates/form.html"
    }
  });

  var frota = [
    {
      "combustivel": "Flex",
      "imagem": null,
      "marca": "Volkswagem",
      "modelo": "Gol",
      "placa": "FFF­5498",
      "cor": "Vermelho"
    },
    {
      "combustivel": "Gasolina",
      "imagem": null,
      "marca": "Volkswagem",
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
  ]
})();
