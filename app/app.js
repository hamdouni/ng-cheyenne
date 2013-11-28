function PdvCtrl($scope,$http) {
	$scope.search = function() {
		$http({
			method: 'GET',
			url: 'srv/pdv.rsp',
			params: {name: $scope.name}
		}).
		success(function(data,status){
			$scope.status = status;
			$scope.pdvs = data;
		}).
		error(function(data,status){
			$scope.status = status;
		});
	}
	$scope.reset = function() {
		$scope.critere.pv_id = "";
		$scope.critere.pv_nom = "";
	}
}