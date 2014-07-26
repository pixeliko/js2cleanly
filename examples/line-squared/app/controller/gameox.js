(function() {
	'use strict';
	app.controller('gameOX', function ($scope, threeInRay) {
		$scope.optionMultiplayer = {};
		$scope.showSeccion = 'intro';
		$scope.option = '';
		$scope.victoria = false;
		$scope.challenge = function() {
			$scope.show = _.cloneDeep();
			$scope.show.challenge = true;
		};
		$scope.singlePlayer = function() {
			$scope.showSeccion = 'game';
		};
		$scope.multiPlayer = function() {
			$scope.showSeccion = 'multiplayer';
		};
		$scope.quickStart = function() {
			$scope.show = _.cloneDeep();
			$scope.show.game = true;
			$scope.reiniciar();
		};
		$scope.reiniciar = function() {
			$scope.columns = _.cloneDeep(threeInRay.columns);
			$scope.players = _.cloneDeep(threeInRay.players);
			$scope.victoria = false;
			playerRandom();
		};
		function playerRandom() {
			var numRandom = Math.floor((Math.random()*2));
			var options = ['X', 'O'];
			$scope.players[0].src = $scope.optionMultiplayer.reta || 'images/x.jpg';
			$scope.players[1].src = $scope.optionMultiplayer.retado || 'images/o.jpg';
			$scope.option = options[numRandom];
			$scope.src = $scope.players[numRandom].src;
			$scope.players[numRandom].selectPlayer = true;
		}
	});
}());