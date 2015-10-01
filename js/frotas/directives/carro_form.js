(function(){
  var app = angular.module("frota");

  app.directive("carroForm", function(){
    return {
      restrict: "A",
      templateUrl: "templates/form.html"
    }
  });
})();
