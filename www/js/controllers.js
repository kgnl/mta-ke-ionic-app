angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $ionicModal) {

  // With the new view caching in Ionic, Controllers are only called
  // when they are recreated or on app start, instead of every page change.
  // To listen for when this page is active (for example, to refresh data),
  // listen for the $ionicView.enter event:
  //$scope.$on('$ionicView.enter', function(e) {
  //});

  // Form data for the login modal
  

  $ionicModal.fromTemplateUrl('templates/uresNevjegy.html', {
    scope: $scope
	}).then(function(modal) {
		$scope.modal = modal;
	});

	// Triggered in the login modal to close it
	$scope.closeNevjegy = function() {
		$scope.modal.hide();
	};

	// Open the login modal
	$scope.showNevjegy = function(name) {
		$scope.name = name;
		$scope.modal.show();
	};
  
	$scope.includeNevjegy = function(name) {
		return 'templates/kutatok/kartyak/' + name + '.html';
	};
})



.controller('PlaylistsCtrl', function($scope) {
  $scope.playlists = [
    { title: 'Reggae', id: 1 },
    { title: 'Chill', id: 2 },
    { title: 'Dubstep', id: 3 },
    { title: 'Indie', id: 4 },
    { title: 'Rap', id: 5 },
    { title: 'Cowbell', id: 6 }
  ];
})

.controller('PlaylistCtrl', function($scope, $stateParams) {
})

.controller('KutatokCtrl', function($scope) {
  $scope.kutatok = [
    { title: 'Kutatócsoport jelenlegi tagjai (2012-től)', id: 1 },
    { title: 'Kutatócsoport tagjai 1996-2012 között', id: 2 },
    { title: 'A munkaterv végrehajtása során a pályázóval együttműködő, TKI állományba nem kerülő kutatók', id: 3 }
  ];
})

.controller('KutatoCtrl', function($scope, $stateParams, $ionicModal) {
	$scope.kutatoId = $stateParams.kutatoId;
})

;

