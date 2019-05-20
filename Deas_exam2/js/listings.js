function listings($scope, $http) {
	$http.get('js/homes.json')
	.success(function(data) { $scope.ourhomes = data.ourhomes; })
	.error(function(data) { console.log('error');});
}