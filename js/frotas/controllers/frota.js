(function() {
  var app = angular.module("frota");

  app.controller("FrotaController", ["$scope", "$filter", "Frota", function($scope, $filter, Frota){
    $scope.products = Frota.get();
    $scope.product = {};

    $scope.getImage = function(carro){
      return carro.imagem || "http://s.glbimg.com/jo/g1/f/original/2011/08/29/montadoras_" + angular.lowercase(carro.marca) + ".png";
    }

    // Paging + search
    $scope.totalItems = $scope.products.length;
    $scope.currentPage = 1;
    $scope.itemsPerPage = 5;
    $scope.maxSize = 5;

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
  }]);
})();
