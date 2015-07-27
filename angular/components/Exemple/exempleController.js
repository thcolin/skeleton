(function() {
    'use strict';

	angular
		.module('SkeletonApp')
		.controller('ExempleController', ['MessageService', '$scope', function(MessageService, $scope){
			
			$scope.message = 'Exemple webapp with Silex & AngularJS';
			
		}]);
		
})();