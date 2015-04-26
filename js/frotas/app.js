(function(){
  var app = angular.module("frota", []);

  app.controller("FrotaController", ["$scope", function($scope){
    $scope.products = frota;
    $scope.product = {};

    $scope.newCarro = function(){
      $scope.product = {};
      $("#new.modal").modal();
    };

    $scope.createCarro = function(){
      $scope.products.push($scope.product);
      $("#new.modal").modal("hide");
    };

    $scope.editCarro = function(carro){
      $scope.product = carro;
      $("#edit.modal").modal();
    };

    $scope.updateCarro = function(){
      $("#edit.modal").modal("hide");
    }

    $scope.deleteCarro = function(carro){
      var index = $scope.products.indexOf(carro);
      if (index != -1) {
        $scope.products.splice(index, 1);
      }
    };

    $scope.search = function (row) {
      return (angular.lowercase(row.marca || '').indexOf($scope.query || '') !== -1 || angular.lowercase(row.cor || '').indexOf($scope.query || '') !== -1);
    };
  }]);

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
