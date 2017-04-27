'use strict';

angular.module('myApp', [])

// .config(['$routeProvider', function($routeProvider) {
//   $routeProvider.when('/view1', {
//     templateUrl: 'view1/view1.html',
//     controller: 'View1Ctrl'
//   });
// }])



.controller('View1Ctrl', function($scope) {

   

          var ctx = document.getElementById("myChart");

         var scatterChart = new Chart(ctx, {
            type: 'line',


            data: {
                datasets: [{
                    label: 'HK$',
                    pointBackgroundColor: "#ff8533",
                    backgroundColor: "darkorange",
                    data: [{
                        x: 20,
                        y: 76000
                    }, {
                        x: 40,
                        y: 100000
                    }, {
                        x: 60,
                        y: 200000
                    }]
                }]
            },
            options: {
                scales: {
                    xAxes: [{
                        type: 'linear',
                        position: 'bottom'
                    }]
                }
            }
        });


       

    //------------------------------------------------

    $scope.amberBackground={
        'padding-top': '1px',
        'height': '300px',
        'background-color':'darkorange',
        'width':'100%'
    }

    $scope.test=function(){
      //alert('test');
           $scope.amberBackground={
              'padding-top': '1px',
              'height': '750px',
              'background-color':'darkorange'
           }
    }
});