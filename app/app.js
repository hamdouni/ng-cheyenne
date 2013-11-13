function PdvCtrl($scope,$http) {
	$scope.pdvs = [{ 'id':'1','nom':'Epicerie ANDES'},{ 'id':'2','nom':'Au Marché Conté'},{ 'id':'3','nom':'A.I.R.E.S. '}];

	$http.get('srv/pdv.rsp').
	success(function(data,status){
		$scope.status = status;
		$scope.pdvs = data;
	}).
	error(function(data,status){
		$scope.status = status;
	});
}