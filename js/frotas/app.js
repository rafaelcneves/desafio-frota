(function(){
  var app = angular.module("frota", ['ui.bootstrap']);

  app.controller("FrotaController", function($scope, $filter){
    $scope.products = frota;
    $scope.product = {};

    // Paging + search

    $scope.totalItems = $scope.products.length;
    $scope.currentPage = 1;
    $scope.itemsPerPage = 5;

    $scope.$watch('currentPage + products + query', function() {
      var begin = (($scope.currentPage - 1) * $scope.itemsPerPage),
          end = begin + $scope.itemsPerPage;

      $scope.filteredProducts = $filter('filter')($scope.products, $scope.search);
      $scope.totalItems = $scope.filteredProducts.length;
      $scope.filteredProducts = $scope.filteredProducts.slice(begin, end);
    });

    $scope.search = function (row) {
      return (angular.lowercase(row.marca || '').indexOf($scope.query || '') !== -1 || angular.lowercase(row.cor || '').indexOf($scope.query || '') !== -1);
    };

    // Crud Carro

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
