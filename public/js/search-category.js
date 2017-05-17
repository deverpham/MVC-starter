var app = angular.module('app',[]);
app.controller('search-category',($scope,$http) => {
    $scope.lastType=0;
    $scope.products=[];
    onInit = function(){
        $('input').on('keypress',(val) => {
          $scope.lastType =Date.now();
          $scope.loadTemplate(val)
        })
    }()

    $scope.loadTemplate = function(key) {
      var latestTime = $scope.lastType;
      setTimeout(function() {
        if(latestTime == $scope.lastType) {
          $http.post('/product/search', {
            tag :$('input').val().toLowerCase()
          })
               .then((response) => {
                 var responseObject =response.data;
                 if(responseObject.status=='success')
                  {

                    $scope.products=responseObject.value;
                  //  $scope.$apply();
                  }
                 console.log(response);
               })
        }
      },500)
      //console.log($scope.lastType);
    }

})
