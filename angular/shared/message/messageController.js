(function() {
    'use strict';

	angular
		.module('SkeletonApp')
		.controller('MessageController', ['MessageService', '$scope', function(MessageService, $scope){
			
			$scope.MessageService = MessageService;
			
			$scope.clearMessage = function(index){
					
				$scope.MessageService.messages.splice(index, 1);
				
			};
			
		}]);
		
})();