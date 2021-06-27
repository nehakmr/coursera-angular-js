(function () {
    'use strict';
    angular.module('LunchCheck',[])
    .controller('LunchCheckController',LunchCheckController)
    
    LunchCheckController.$inject = ['$scope'];
    
    function LunchCheckController($scope) {
        $scope.dishes = '';
        $scope.check = function() {
            const dishName = $scope.dishes.split(',');
            var actualLength=0;
            //Calculate actual length of the array. Do not consider empty string element in the array
            for( var i=0; i< dishName.length;i++) {               
                if(dishName[i].trim() != "")
                {
                    actualLength++;  
                }; 
            }            
            if(actualLength === 0){ 
               $scope.message = "Please enter data first";              
            }
            else if (actualLength<=3 && actualLength > 0) {
                $scope.message = "Enjoy!";
            }  
            else {
                $scope.message = "Too much!";  
            }              
        }
    }
})();