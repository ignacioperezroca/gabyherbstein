<?php 
  $title = 'Gaby Herbstein - CREER PARA VER';
  $metaDescription = '<meta name="description" content="Gaby Herbstein">';
?>
<script src="https://ajax.googleapis.com/ajax/libs/angularjs/1.6.4/angular.min.js"></script>
<?php include 'header.php'; ?>

<style>
  footer{display: none;}
  body{padding: 100px;}
</style>

  <div ng-app="myApp" ng-controller="myCtrl">

    First Name: <input type="text" ng-model="firstName"><br>
    Last Name: <input type="text" ng-model="lastName"><br>
    <br>
    Full Name: {{firstName + " " + lastName}}

  </div>

  <script>
  var app = angular.module('myApp', []);
  app.controller('myCtrl', function($scope) {
      $scope.firstName= "John";
      $scope.lastName= "Doe";
  });
  </script>
  
<?php include 'footer.php'; ?>

