var appadmin = angular.module('admin',[]);


appadmin.controller('addproduct',($scope,$http) => {
  init = function() {
    console.log('init')
  }()
  $scope.product={};
  $scope.listProducts =[];
  $scope.addProduct = function() {
    $scope.product.tag = $scope.product.tag.split(',')
    $http.post('/product/admin/add',{
      product : $scope.product
    })
    .then((response) => {
      alert('success')
      $scope.product={}
    })
    .catch((err) => {
      alert('error :' +err.data.value)
    })
    console.log($scope.product)

  }

  $scope.formSubmit = function() {
    $scope.addProduct();
    return false;
  }

  $scope.loadProducts = function() {
    $http.get('/product/listall')
      .then((response) => {
        $scope.listProducts = response.data.value;
      })
  }

  $scope.deleteProduct = function(id) {
      $http.post('/product/delete', {
        productid:id
      })
      .then((response) => {
          alert('delete sucessfull')
      })
      .catch((err) => {
        alert('err:' +err.data.value)
      })
  }
})
